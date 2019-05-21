import { KeyDown } from "@edsilv/key-codes";
import "../../aframe";
import { AlGltfModelEvents, AlNodeSpawnerEvents, AlOrbitControlEvents } from "../../aframe";
import { appClearAngles, appClearEdges, appClearNodes, appDeleteAngle, appDeleteEdge, appDeleteNode, appSelectAngle, appSelectEdge, appSelectNode, appSetAngle, appSetBoundingBoxEnabled, appSetCamera, appSetControlsEnabled, appSetDisplayMode, appSetEdge, appSetGraphEnabled, appSetNode, appSetOrientation, appSetSlicesIndex, appSetSlicesWindowCenter, appSetSlicesWindowWidth, appSetSrc, appSetSrcLoaded, appSetVolumeSteps, appSetVolumeWindowCenter, appSetVolumeWindowWidth } from "../../redux/actions";
import { configureStore } from "../../redux/store";
import { GetUtils, ThreeUtils, GraphUtils, AlGraphEvents, AMIUtils, EventUtils } from "../../utils";
import { Constants } from "../../Constants";
import { DisplayMode } from "../../enums";
import { AlGraphEntryType } from "../../enums";
import { AlVolumeEvents } from "../../aframe/components/AlVolumeComponent";
export class Aleph {
    constructor() {
        this._hovered = null;
        this._isShiftDown = false;
        this._isWebGl2 = true;
        this.width = "640";
        this.height = "480";
    }
    async load(src, displayMode) {
        if (this.src) {
            this._setSrc(null);
            setTimeout(() => {
                this._setSrc(src, displayMode);
            }, Constants.minLoadingMS);
        }
        else {
            this._setSrc(src, displayMode);
        }
    }
    async resize() {
        this._resize();
    }
    async setNode(node) {
        this._setNode(node);
    }
    async setGraph(graph) {
        this._setGraph(graph);
    }
    async deleteNode(nodeId) {
        this._deleteNode(nodeId);
    }
    async clearGraph() {
        this._clearGraph();
    }
    async selectNode(nodeId) {
        this._selectNode(nodeId, true);
    }
    async deleteEdge(edgeId) {
        this._deleteEdge(edgeId);
    }
    async deleteAngle(angleId) {
        this._deleteAngle(angleId);
    }
    async setEdge(edge) {
        this._setEdge(edge);
    }
    async setDisplayMode(displayMode) {
        this._setDisplayMode(displayMode);
    }
    async setGraphEnabled(enabled) {
        this._setGraphEnabled(enabled);
    }
    async setBoundingBoxEnabled(visible) {
        this._setBoundingBoxEnabled(visible);
    }
    async setSlicesIndex(index) {
        this._setSlicesIndex(index);
    }
    async setOrientation(orientation) {
        this._setOrientation(orientation);
    }
    async setSlicesWindowCenter(center) {
        this._setSlicesWindowCenter(center);
    }
    async setSlicesWindowWidth(width) {
        this._setSlicesWindowWidth(width);
    }
    async setVolumeSteps(steps) {
        this._setVolumeSteps(steps);
    }
    async setVolumeWindowCenter(center) {
        this._setVolumeWindowCenter(center);
    }
    async setVolumeWindowWidth(width) {
        this._setVolumeWindowWidth(width);
    }
    componentWillLoad() {
        this._isWebGl2 = ThreeUtils.isWebGL2Available();
        this.store.setStore(configureStore({}));
        this.store.mapStateToProps(this, state => {
            const { app: { angles, boundingBoxEnabled, camera, controlsEnabled, displayMode, edges, graphEnabled, nodes, orientation, selected, slicesIndex, slicesWindowCenter, slicesWindowWidth, src, srcLoaded, volumeSteps, volumeWindowCenter, volumeWindowWidth } } = state;
            return {
                angles,
                boundingBoxEnabled,
                camera,
                controlsEnabled,
                displayMode,
                edges,
                graphEnabled,
                nodes,
                orientation,
                selected,
                slicesIndex,
                slicesWindowCenter,
                slicesWindowWidth,
                src,
                srcLoaded,
                volumeSteps,
                volumeWindowCenter,
                volumeWindowWidth
            };
        });
        this.store.mapDispatchToProps(this, {
            appClearAngles,
            appClearEdges,
            appClearNodes,
            appDeleteAngle,
            appDeleteEdge,
            appDeleteNode,
            appSelectAngle,
            appSelectEdge,
            appSelectNode,
            appSetAngle,
            appSetBoundingBoxEnabled,
            appSetCamera,
            appSetControlsEnabled,
            appSetDisplayMode,
            appSetEdge,
            appSetGraphEnabled,
            appSetNode,
            appSetOrientation,
            appSetSlicesIndex,
            appSetSlicesWindowCenter,
            appSetSlicesWindowWidth,
            appSetSrc,
            appSetSrcLoaded,
            appSetVolumeSteps,
            appSetVolumeWindowCenter,
            appSetVolumeWindowWidth
        });
        this._controlsAnimationFinishedHandler = this._controlsAnimationFinishedHandler.bind(this);
        this._controlsInteractionHandler = this._controlsInteractionHandler.bind(this);
        this._graphEntryDraggedHandler = this._graphEntryDraggedHandler.bind(this);
        this._graphEntryPointerDownHandler = this._graphEntryPointerDownHandler.bind(this);
        this._graphEntryPointerOutHandler = this._graphEntryPointerOutHandler.bind(this);
        this._graphEntryPointerOverHandler = this._graphEntryPointerOverHandler.bind(this);
        this._graphEntryPointerUpHandler = this._graphEntryPointerUpHandler.bind(this);
        this._graphEntrySelectedHandler = this._graphEntrySelectedHandler.bind(this);
        this._graphEntryValidTargetHandler = this._graphEntryValidTargetHandler.bind(this);
        this._keyDownHandler = this._keyDownHandler.bind(this);
        this._keyUpHandler = this._keyUpHandler.bind(this);
        this._controlsInteractionFinishedHandler = this._controlsInteractionFinishedHandler.bind(this);
        this._spawnNodeHandler = this._spawnNodeHandler.bind(this);
        this._srcLoaded = this._srcLoaded.bind(this);
        this._debouncedAppSetCamera = EventUtils.debounce(this.appSetCamera, Constants.minFrameMS).bind(this);
    }
    _renderSpinner() {
        if (this.src && !this.srcLoaded) {
            return (h("div", { id: "spinner" },
                h("div", { class: "square" })));
        }
    }
    _renderSrc() {
        if (!this.src) {
            return null;
        }
        switch (this.displayMode) {
            case DisplayMode.MESH: {
                return (h("a-entity", { class: "collidable", "al-node-spawner": `
              graphEnabled: ${this.graphEnabled};
            `, "al-gltf-model": `
              src: url(${this.src});
              dracoDecoderPath: ${this.dracoDecoderPath};
            `, position: "0 0 0", scale: "1 1 1", ref: (el) => (this._targetEntity = el) }));
            }
            case DisplayMode.SLICES: {
                return (h("a-entity", { id: "target-entity", class: "collidable", "al-node-spawner": `
              graphEnabled: ${this.graphEnabled};
            `, "al-volume": `
              srcLoaded: ${this.srcLoaded};
              src: ${this.src};
              displayMode: ${this.displayMode};
              slicesIndex: ${this.slicesIndex};
              slicesOrientation: ${this.orientation};
              slicesWindowWidth: ${this.slicesWindowWidth};
              slicesWindowCenter: ${this.slicesWindowCenter};
              volumeSteps: ${this.volumeSteps};
              volumeWindowCenter: ${this.volumeWindowCenter};
              volumeWindowWidth: ${this.volumeWindowWidth};
              isWebGl2: ${this._isWebGl2};
            `, position: "0 0 0", ref: (el) => (this._targetEntity = el) }));
            }
            case DisplayMode.VOLUME: {
                return (h("a-entity", { id: "target-entity", "al-volume": `
              srcLoaded: ${this.srcLoaded};
              src: ${this.src};
              displayMode: ${this.displayMode};
              slicesIndex: ${this.slicesIndex};
              slicesOrientation: ${this.orientation};
              slicesWindowWidth: ${this.slicesWindowWidth};
              slicesWindowCenter: ${this.slicesWindowCenter};
              volumeSteps: ${this.volumeSteps};
              volumeWindowCenter: ${this.volumeWindowCenter};
              volumeWindowWidth: ${this.volumeWindowWidth};
              isWebGl2: ${this._isWebGl2};
            `, position: "0 0 0", ref: (el) => (this._targetEntity = el) }));
            }
        }
    }
    _renderBoundingBox() {
        if (this.srcLoaded && this.boundingBoxEnabled) {
            let size = new THREE.Vector3();
            this._boundingBox.getSize(size);
            let position;
            switch (this.displayMode) {
                case DisplayMode.MESH: {
                    position = this._targetEntity.object3D.position.clone();
                    break;
                }
                case DisplayMode.VOLUME:
                case DisplayMode.SLICES: {
                    position = this._targetEntity.object3D.position
                        .clone()
                        .add(GetUtils.getGeometryCenter(this._getMesh().geometry));
                    break;
                }
            }
            if (this.displayMode === DisplayMode.VOLUME) {
                return (h("a-entity", { position: ThreeUtils.vector3ToString(position), "al-bounding-box": `
              scale: ${ThreeUtils.vector3ToString(size)};
              color: ${Constants.colorValues.red};
            `, "al-node-spawner": `
              graphEnabled: ${this.graphEnabled};
            `, class: "collidable", ref: el => (this._boundingEntity = el) }));
            }
            else {
                return (h("a-entity", { position: ThreeUtils.vector3ToString(position), "al-bounding-box": `
              scale: ${ThreeUtils.vector3ToString(size)};
              color: ${Constants.colorValues.red};
            `, ref: el => (this._boundingEntity = el) }));
            }
        }
        return null;
    }
    _renderNodes() {
        return Array.from(this.nodes).map((n) => {
            const [nodeId, node] = n;
            let textOffset = new THREE.Vector3(0, 2.5, 0);
            textOffset.multiplyScalar(node.scale);
            return (h("a-entity", { class: "collidable", id: nodeId, position: node.position, "al-node": `
            scale: ${node.scale};
            selected: ${this.selected === nodeId};
            graphEnabled: ${this.graphEnabled};
          ` },
                h("a-entity", { text: `
              value: ${node.title};
              side: double;
              align: center;
              baseline: bottom;
              anchor: center;
              width: ${Constants.fontSizeMedium * this._boundingSphereRadius}
            `, "al-look-to-camera": true, "al-render-overlaid": true, visible: `${this.selected === nodeId}`, position: ThreeUtils.vector3ToString(textOffset), id: `${nodeId}-label` })));
        });
    }
    _renderEdges() {
        return Array.from(this.edges).map((n) => {
            const [edgeId, edge] = n;
            const node1 = this.nodes.get(edge.node1Id);
            const node2 = this.nodes.get(edge.node2Id);
            if (node1 && node2) {
                const sv = ThreeUtils.stringToVector3(node1.position);
                const ev = ThreeUtils.stringToVector3(node2.position);
                let dir = ev.clone().sub(sv);
                let dist = dir.length();
                dir = dir.normalize().multiplyScalar(dist * 0.5);
                let centoid = sv.clone().add(dir);
                let textOffset = new THREE.Vector3(0, 2.5, 0);
                let scale = (node1.scale + node2.scale) / 2;
                let radius = this._boundingSphereRadius * Constants.edgeSize;
                textOffset.multiplyScalar(scale);
                return (h("a-entity", { class: "collidable", id: edgeId, position: ThreeUtils.vector3ToString(centoid), "al-edge": `
              length: ${dist};
              node1: ${node1.position};
              node2: ${node2.position};
              selected: ${this.selected === edgeId};
              radius: ${radius};
              nodeScale: ${scale};
            ` },
                    h("a-entity", { id: `${edgeId}-title`, text: `
                value: ${dist.toFixed(Constants.angleUnitsDecimalPlaces) +
                            (this.displayMode === DisplayMode.MESH ? "m" : "mm")};
                side: double;
                align: center;
                baseline: bottom;
                anchor: center;
                width: ${Constants.fontSizeSmall * this._boundingSphereRadius}
              `, position: ThreeUtils.vector3ToString(textOffset), visible: `${this.selected === edgeId}`, "al-look-to-camera": true, "al-render-overlaid": true })));
            }
        });
    }
    _renderAngles() {
        return Array.from(this.angles).map((n) => {
            const [angleId, angle] = n;
            const edge1 = this.edges.get(angle.edge1Id);
            const edge2 = this.edges.get(angle.edge2Id);
            if (edge1 && edge2) {
                let radius = this._boundingSphereRadius * Constants.edgeSize;
                let centralNode;
                let node1;
                let node2;
                if (edge1.node1Id === edge2.node1Id) {
                    centralNode = this.nodes.get(edge2.node1Id);
                    node1 = this.nodes.get(edge1.node2Id);
                    node2 = this.nodes.get(edge2.node2Id);
                }
                else if (edge1.node1Id === edge2.node2Id) {
                    centralNode = this.nodes.get(edge2.node2Id);
                    node1 = this.nodes.get(edge1.node2Id);
                    node2 = this.nodes.get(edge2.node1Id);
                }
                else if (edge1.node2Id === edge2.node1Id) {
                    centralNode = this.nodes.get(edge2.node1Id);
                    node1 = this.nodes.get(edge1.node1Id);
                    node2 = this.nodes.get(edge2.node2Id);
                }
                else if (edge1.node2Id === edge2.node2Id) {
                    centralNode = this.nodes.get(edge2.node2Id);
                    node1 = this.nodes.get(edge1.node1Id);
                    node2 = this.nodes.get(edge2.node1Id);
                }
                const node1Pos = ThreeUtils.stringToVector3(node1.position);
                const node2Pos = ThreeUtils.stringToVector3(node2.position);
                const centralPos = ThreeUtils.stringToVector3(centralNode.position);
                let dir1 = node1Pos
                    .clone()
                    .sub(centralPos)
                    .normalize();
                let dir2 = node2Pos
                    .clone()
                    .sub(centralPos)
                    .normalize();
                let angle = dir2.angleTo(dir1);
                const smallestLength = Math.min(centralPos.distanceTo(node1Pos), centralPos.distanceTo(node2Pos));
                let distanceFromCentralNode = Math.min(smallestLength * 0.25, radius * 25);
                distanceFromCentralNode = Math.max(distanceFromCentralNode, radius * 10);
                let edge1Pos = dir1
                    .clone()
                    .multiplyScalar(distanceFromCentralNode);
                let edge2Pos = dir2
                    .clone()
                    .multiplyScalar(distanceFromCentralNode);
                let length = edge1Pos.clone().distanceTo(edge2Pos.clone());
                let position = edge1Pos
                    .clone()
                    .add(edge2Pos.clone())
                    .divideScalar(2);
                let textOffset = new THREE.Vector3(0, 2.5, 0);
                let scale = (node1.scale + node2.scale + centralNode.scale) / 3;
                textOffset.multiplyScalar(scale);
                return (h("a-entity", { class: "collidable", id: angleId, position: centralNode.position, "al-angle": `
              selected: ${this.selected === angleId};
              edge0Pos: ${ThreeUtils.vector3ToString(edge1Pos)};
              edge1Pos: ${ThreeUtils.vector3ToString(edge2Pos)};
              position: ${ThreeUtils.vector3ToString(position)};
              length: ${length};
              radius: ${radius};
              angle: ${angle};
            ` },
                    h("a-entity", { id: `${angleId}-title`, text: `
                value: ${THREE.Math.radToDeg(angle).toFixed(Constants.angleUnitsDecimalPlaces) + " deg"};
                side: double;
                align: center;
                baseline: bottom;
                anchor: center;
                width: ${Constants.fontSizeSmall * this._boundingSphereRadius}
              `, position: ThreeUtils.vector3ToString(position.clone().add(textOffset)), visible: `${this.selected === angleId}`, "al-look-to-camera": true, "al-render-overlaid": true })));
            }
        });
    }
    _renderLights() {
        return [
            h("a-entity", { id: "light-1", light: "type: directional; color: #ffffff; intensity: 0.75", position: "1 1 1" }),
            h("a-entity", { id: "light-2", light: "type: directional; color: #002958; intensity: 0.5", position: "-1 -1 -1" }),
            h("a-entity", { id: "light-3", light: "type: ambient; color: #d0d0d0; intensity: 1" })
        ];
    }
    _renderCamera() {
        return (h("a-camera", { fov: Constants.cameraValues.fov, near: Constants.cameraValues.near, "look-controls": "enabled: false", far: Constants.cameraValues.far, id: "mainCamera", cursor: "rayOrigin: mouse", raycaster: "objects: .collidable;", "al-orbit-control": `
          maxPolarAngle: ${Constants.cameraValues.maxPolarAngle};
          minDistance: ${Constants.cameraValues.minDistance};
          screenSpacePanning: true;
          rotateSpeed: ${Constants.cameraValues.rotateSpeed};
          zoomSpeed: ${Constants.cameraValues.zoomSpeed};
          enableDamping: true;
          dampingFactor: ${Constants.cameraValues.dampingFactor};
          controlTarget: ${ThreeUtils.vector3ToString(this.camera ? this.camera.target : new THREE.Vector3(0, 0, 0))};
          controlPosition: ${ThreeUtils.vector3ToString(this.camera ? this.camera.position : new THREE.Vector3(0, 0, 0))};
          enabled: ${this.controlsEnabled};
          animating: ${this.camera && this.camera.animating ? this.camera.animating : false}
        `, ref: el => (this._camera = el) }));
    }
    _renderScene() {
        return (h("a-scene", { embedded: true, renderer: `
          colorManagement: true;
          sortObjects: true;
          webgl2: ${this._isWebGl2};
          antialias: true;
        `, "vr-mode-ui": "enabled: false", ref: el => (this._scene = el) },
            this._renderBoundingBox(),
            this._renderSrc(),
            this._renderNodes(),
            this._renderEdges(),
            this._renderAngles(),
            this._renderLights(),
            this._renderCamera()));
    }
    render() {
        return (h("div", { id: "al-container", style: {
                width: GetUtils.addCssUnits(this.width),
                height: GetUtils.addCssUnits(this.height)
            } },
            h("div", { id: "lut-container" },
                h("div", { id: "lut-min" }, "0.0"),
                h("div", { id: "lut-canvases" }),
                h("div", { id: "lut-max" }, "1.0")),
            this._renderScene(),
            this._renderSpinner()));
    }
    _resize() {
        if (this._scene) {
            this._scene.resize();
        }
    }
    _createEdge(node1Id, node2Id) {
        const match = Array.from(this.edges).find(([_id, edge]) => {
            return ((edge.node1Id === node1Id && edge.node2Id === node2Id) ||
                (edge.node1Id === node2Id && edge.node2Id === node1Id));
        });
        if (!match) {
            const newEdge = {
                node1Id: node1Id,
                node2Id: node2Id
            };
            const edgeId = GraphUtils.getNextId(AlGraphEntryType.EDGE, this.edges);
            this._setEdge([edgeId, newEdge]);
        }
        else {
            console.log("edge already exists");
        }
    }
    _createAngle(edge1Id, edge2Id) {
        const match = Array.from(this.angles).find(([_id, angle]) => {
            return ((angle.edge1Id === edge1Id && angle.edge2Id === edge2Id) ||
                (angle.edge1Id === edge2Id && angle.edge2Id === edge1Id));
        });
        if (!match) {
            let edge1 = this.edges.get(edge1Id);
            let edge2 = this.edges.get(edge2Id);
            if (edge1.node1Id === edge2.node1Id ||
                edge1.node1Id == edge2.node2Id ||
                edge1.node2Id == edge2.node1Id ||
                edge1.node2Id === edge2.node2Id) {
                const newAngle = {
                    edge1Id: edge1Id,
                    edge2Id: edge2Id
                };
                const angleId = GraphUtils.getNextId(AlGraphEntryType.ANGLE, this.angles);
                this._setAngle([angleId, newAngle]);
            }
            else {
                console.warn("cannot create angle: edges not connected");
            }
        }
        else {
            console.warn("cannot create angle: angle already exists");
        }
    }
    _stateChanged() {
        this.changed.emit(this.store.getState().app);
    }
    _setGraph(graph) {
        if (graph.nodes) {
            const nodes = new Map(graph.nodes);
            nodes.forEach((value, key) => {
                this.appSetNode([key, value]);
            });
        }
        if (graph.edges) {
            const edges = new Map(graph.edges);
            edges.forEach((value, key) => {
                this.appSetEdge([key, value]);
            });
        }
        if (graph.angles) {
            const angles = new Map(graph.angles);
            angles.forEach((value, key) => {
                this.appSetAngle([key, value]);
            });
        }
        this._stateChanged();
    }
    _clearGraph() {
        this.appClearNodes();
        this.appClearEdges();
        this.appClearAngles();
        this._stateChanged();
    }
    _deleteNode(nodeId) {
        this.appDeleteNode(nodeId);
        this._stateChanged();
    }
    _setNode(node) {
        this.appSetNode(node);
        this._stateChanged();
    }
    _selectNode(nodeId, animate = false) {
        if (animate && nodeId !== this.selected) {
            let animationStart = {
                position: this.camera.position.clone(),
                target: this.camera.target.clone()
            };
            let animationEnd = {
                position: new THREE.Vector3(-1, -1, -1),
                target: this.camera.target.clone()
            };
            let result = GetUtils.getCameraPositionFromNode(this.nodes.get(nodeId), this._boundingSphereRadius, this.camera.target);
            if (result) {
                const diffPos = result.distanceTo(this.camera.position);
                if (diffPos > 0) {
                    animationEnd.position.copy(result.clone());
                    const slerpPath = ThreeUtils.getSlerpPath(animationStart, animationEnd, diffPos > 0, false);
                    this._scene.emit(AlOrbitControlEvents.ANIMATION_STARTED, { slerpPath }, false);
                    this.appSetCamera({
                        animating: true
                    });
                    this.appSelectNode(nodeId);
                    this._stateChanged();
                }
            }
        }
        else {
            this.appSelectNode(nodeId);
            this._stateChanged();
        }
    }
    _setEdge(edge) {
        this.appSetEdge(edge);
        this._stateChanged();
    }
    _deleteEdge(edgeId) {
        this.appDeleteEdge(edgeId);
        this._stateChanged();
    }
    _selectEdge(edgeId) {
        this.appSelectEdge(edgeId);
        this._stateChanged();
    }
    _setAngle(angle) {
        this.appSetAngle(angle);
        this._stateChanged();
    }
    _selectAngle(angleId) {
        this.appSelectAngle(angleId);
        this._stateChanged();
    }
    _deleteAngle(angleId) {
        this.appDeleteAngle(angleId);
        this._stateChanged();
    }
    _setGraphEnabled(enabled) {
        this.appSetGraphEnabled(enabled);
        this._stateChanged();
    }
    _setBoundingBoxEnabled(visible) {
        this.appSetBoundingBoxEnabled(visible);
        this._stateChanged();
    }
    _setSlicesIndex(index) {
        this.appSetSlicesIndex(index);
        this._stateChanged();
    }
    _setOrientation(orientation) {
        this.appSetOrientation(orientation);
        this._stateChanged();
    }
    _setSlicesWindowCenter(center) {
        this.appSetSlicesWindowCenter(center);
        this._stateChanged();
    }
    _setSlicesWindowWidth(width) {
        this.appSetSlicesWindowWidth(width);
        this._stateChanged();
    }
    _setVolumeSteps(steps) {
        this.appSetVolumeSteps(steps);
        this._stateChanged();
    }
    _setVolumeWindowCenter(center) {
        this.appSetVolumeWindowCenter(center);
        this._stateChanged();
    }
    _setVolumeWindowWidth(width) {
        this.appSetVolumeWindowWidth(width);
        this._stateChanged();
    }
    _setDisplayMode(displayMode) {
        this.appSetDisplayMode(displayMode);
        this._stateChanged();
    }
    _setSrc(src, displayMode) {
        this.appSetSrc([src, displayMode]);
        this._stateChanged();
    }
    _getStackHelper() {
        let stackhelper = null;
        if (this.displayMode === DisplayMode.VOLUME) {
            stackhelper = this._loadedObject;
        }
        return stackhelper;
    }
    _getMesh() {
        let mesh = null;
        if (this.displayMode == DisplayMode.MESH) {
            const model = this._targetEntity.object3DMap.mesh;
            if (model instanceof THREE.Mesh) {
                mesh = model;
            }
            else {
                model.traverse(child => {
                    if (child instanceof THREE.Mesh && mesh === null) {
                        mesh = child;
                    }
                });
            }
        }
        else if (this._loadedObject._bBox) {
            mesh = this._loadedObject._bBox._mesh;
        }
        else {
            mesh = this._loadedObject._mesh;
        }
        return mesh;
    }
    _srcLoaded(ev) {
        this._loadedObject = ev.detail;
        let mesh = this._getMesh();
        if (mesh) {
            mesh.geometry.computeBoundingSphere();
            this._boundingSphereRadius = mesh.geometry.boundingSphere.radius;
            this._boundingBox = GetUtils.getBoundingBox(mesh);
            let cameraState = GetUtils.getCameraStateFromMesh(mesh);
            if (cameraState) {
                this.appSetCamera(cameraState);
            }
            this.appSetSrcLoaded(true);
            this._stateChanged();
            this.loaded.emit(ev.detail);
        }
        else {
            throw new Error("Unable to find a mesh in loaded object");
        }
    }
    _keyDownHandler(event) {
        this._isShiftDown = event.shiftKey;
        if (event.keyCode === KeyDown.Delete) {
            if (this.selected) {
                if (this.nodes.has(this.selected)) {
                    this._deleteNode(this.selected);
                }
                else if (this.edges.has(this.selected)) {
                    this._deleteEdge(this.selected);
                }
                else if (this.angles.has(this.selected)) {
                    this._deleteAngle(this.selected);
                }
            }
        }
    }
    _keyUpHandler(_event) {
        this._isShiftDown = false;
    }
    _graphEntryPointerUpHandler(_event) {
        this.appSetControlsEnabled(true);
        ThreeUtils.enableOrbitControls(this._camera, true);
    }
    _graphEntryPointerDownHandler(_event) {
        this.appSetControlsEnabled(false);
        ThreeUtils.enableOrbitControls(this._camera, false);
    }
    _graphEntryPointerOutHandler(_event) {
        this._hovered = null;
    }
    _graphEntryPointerOverHandler(event) {
        this._hovered = event.detail.id;
    }
    _controlsInteractionHandler(_event) { }
    _controlsInteractionFinishedHandler(event) {
        this._debouncedAppSetCamera(event.detail.cameraState);
    }
    _spawnNodeHandler(event) {
        if (this.graphEnabled &&
            this._validTarget &&
            this._hovered === null) {
            let intersection = event.detail.aframeEvent.detail.intersection;
            const nodeId = GraphUtils.getNextId(AlGraphEntryType.NODE, this.nodes);
            let newNode;
            if (this.displayMode === DisplayMode.VOLUME && intersection) {
                let hitPosition = new THREE.Vector3();
                let hitNormal = new THREE.Vector3();
                let rayResult = AMIUtils.volumeRay(this._getStackHelper(), this._camera.object3D.children[0].position.clone(), this._camera.getAttribute("raycaster").direction, Constants.cameraValues.far, hitPosition, hitNormal);
                if (rayResult) {
                    newNode = {
                        position: ThreeUtils.vector3ToString(hitPosition),
                        scale: this._boundingSphereRadius / Constants.nodeSizeRatio,
                        title: nodeId
                    };
                }
            }
            else if (intersection) {
                newNode = {
                    targetId: "0",
                    position: ThreeUtils.vector3ToString(intersection.point),
                    scale: this._boundingSphereRadius / Constants.nodeSizeRatio,
                    title: nodeId
                };
            }
            if (newNode) {
                const previousSelected = this.selected;
                this._setNode([nodeId, newNode]);
                if (this._isShiftDown &&
                    this.nodes.has(previousSelected)) {
                    this._createEdge(previousSelected, nodeId);
                    this._selectNode(nodeId);
                }
            }
        }
    }
    _graphEntryValidTargetHandler(event) {
        this._validTarget = event.detail.valid;
    }
    _controlsAnimationFinishedHandler(_event) {
        this.appSetCamera({
            animating: false
        });
    }
    _graphEntrySelectedHandler(event) {
        if (!this.graphEnabled) {
            return;
        }
        const type = event.detail.type;
        const id = event.detail.id;
        switch (type) {
            case AlGraphEntryType.NODE: {
                if (this._hovered !== null &&
                    this.nodes.has(this._hovered) &&
                    (this.selected !== null && this.nodes.has(this.selected)) &&
                    this.selected !== this._hovered &&
                    this._isShiftDown) {
                    this._createEdge(this.selected, this._hovered);
                }
                this._selectNode(id);
                break;
            }
            case AlGraphEntryType.EDGE: {
                if (this._hovered !== null &&
                    this.edges.has(this._hovered) &&
                    (this.selected !== null && this.edges.has(this.selected)) &&
                    this.selected !== this._hovered &&
                    this._isShiftDown) {
                    this._createAngle(this.selected, this._hovered);
                }
                this._selectEdge(id);
                break;
            }
            case AlGraphEntryType.ANGLE: {
                this._selectAngle(id);
                break;
            }
        }
    }
    _graphEntryDraggedHandler(event) {
        const nodeId = event.detail.id;
        const raycaster = this._camera.components.raycaster;
        const raycasterAttribute = this._camera.getAttribute("raycaster");
        let intersection;
        let hitPosition = new THREE.Vector3();
        let validLocation = false;
        let orbitPosition = this._camera.object3D.children[0].position;
        if (this.displayMode === DisplayMode.VOLUME) {
            intersection = raycaster.getIntersection(this._boundingEntity);
            if (intersection) {
                let hitNormal = new THREE.Vector3();
                let rayResult = AMIUtils.volumeRay(this._getStackHelper(), orbitPosition.clone(), raycasterAttribute.direction, Constants.cameraValues.far, hitPosition, hitNormal);
                if (rayResult) {
                    validLocation = true;
                }
            }
        }
        else {
            intersection = raycaster.getIntersection(this._targetEntity);
            if (intersection) {
                hitPosition.copy(intersection.point);
                validLocation = true;
            }
        }
        if (!validLocation) {
            let distance = orbitPosition.distanceTo(this._targetEntity.getAttribute("position"));
            hitPosition.copy(orbitPosition);
            hitPosition.add(raycasterAttribute.direction.clone().multiplyScalar(distance * 1.5));
        }
        this._setNode([
            nodeId,
            {
                position: ThreeUtils.vector3ToString(hitPosition)
            }
        ]);
        const eventName = nodeId + Constants.movedEventName;
        this._scene.emit(eventName, {}, true);
    }
    _addEventListeners() {
        window.addEventListener("keydown", this._keyDownHandler, false);
        window.addEventListener("keyup", this._keyUpHandler, false);
        this._scene.addEventListener(AlOrbitControlEvents.ANIMATION_FINISHED, this._controlsAnimationFinishedHandler, false);
        this._scene.addEventListener(AlOrbitControlEvents.INTERACTION, this._controlsInteractionHandler, false);
        this._scene.addEventListener(AlOrbitControlEvents.INTERACTION_FINISHED, this._controlsInteractionFinishedHandler, false);
        this._scene.addEventListener(AlGraphEvents.POINTER_UP, this._graphEntryPointerUpHandler, false);
        this._scene.addEventListener(AlGraphEvents.POINTER_DOWN, this._graphEntryPointerDownHandler, false);
        this._scene.addEventListener(AlGraphEvents.DRAGGED, this._graphEntryDraggedHandler, false);
        this._scene.addEventListener(AlGraphEvents.SELECTED, this._graphEntrySelectedHandler, false);
        this._scene.addEventListener(AlNodeSpawnerEvents.ADD_NODE, this._spawnNodeHandler, false);
        this._scene.addEventListener(AlNodeSpawnerEvents.VALID_TARGET, this._graphEntryValidTargetHandler, false);
        this._scene.addEventListener(AlGltfModelEvents.LOADED, this._srcLoaded, false);
        this._scene.addEventListener(AlVolumeEvents.LOADED, this._srcLoaded, false);
        this._scene.addEventListener(AlGraphEvents.POINTER_OVER, this._graphEntryPointerOverHandler, false);
        this._scene.addEventListener(AlGraphEvents.POINTER_OUT, this._graphEntryPointerOutHandler, false);
    }
    componentDidLoad() { }
    componentDidUpdate() {
        if (this._scene) {
            this._addEventListeners();
        }
    }
    static get is() { return "uv-aleph"; }
    static get properties() { return {
        "angles": {
            "state": true
        },
        "boundingBoxEnabled": {
            "state": true
        },
        "camera": {
            "state": true
        },
        "clearGraph": {
            "method": true
        },
        "controlsEnabled": {
            "state": true
        },
        "deleteAngle": {
            "method": true
        },
        "deleteEdge": {
            "method": true
        },
        "deleteNode": {
            "method": true
        },
        "displayMode": {
            "state": true
        },
        "dracoDecoderPath": {
            "type": String,
            "attr": "draco-decoder-path"
        },
        "edges": {
            "state": true
        },
        "graphEnabled": {
            "state": true
        },
        "height": {
            "type": String,
            "attr": "height"
        },
        "load": {
            "method": true
        },
        "nodes": {
            "state": true
        },
        "nodesVisible": {
            "state": true
        },
        "optionsEnabled": {
            "state": true
        },
        "optionsVisible": {
            "state": true
        },
        "orientation": {
            "state": true
        },
        "resize": {
            "method": true
        },
        "selected": {
            "state": true
        },
        "selectNode": {
            "method": true
        },
        "setBoundingBoxEnabled": {
            "method": true
        },
        "setDisplayMode": {
            "method": true
        },
        "setEdge": {
            "method": true
        },
        "setGraph": {
            "method": true
        },
        "setGraphEnabled": {
            "method": true
        },
        "setNode": {
            "method": true
        },
        "setOrientation": {
            "method": true
        },
        "setSlicesIndex": {
            "method": true
        },
        "setSlicesWindowCenter": {
            "method": true
        },
        "setSlicesWindowWidth": {
            "method": true
        },
        "setVolumeSteps": {
            "method": true
        },
        "setVolumeWindowCenter": {
            "method": true
        },
        "setVolumeWindowWidth": {
            "method": true
        },
        "slicesIndex": {
            "state": true
        },
        "slicesWindowCenter": {
            "state": true
        },
        "slicesWindowWidth": {
            "state": true
        },
        "src": {
            "state": true
        },
        "srcLoaded": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "volumeSteps": {
            "state": true
        },
        "volumeWindowCenter": {
            "state": true
        },
        "volumeWindowWidth": {
            "state": true
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get events() { return [{
            "name": "changed",
            "method": "changed",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "loaded",
            "method": "loaded",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:uv-aleph:**/"; }
}
