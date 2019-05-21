export class EventUtils {
    static debounce(fn, debounceDuration) {
        debounceDuration = debounceDuration || 100;
        return function () {
            if (!fn.debouncing) {
                const args = Array.prototype.slice.apply(arguments);
                fn.lastReturnVal = fn.apply(this, args);
                fn.debouncing = true;
            }
            clearTimeout(fn.debounceTimeout);
            fn.debounceTimeout = setTimeout(function () {
                fn.debouncing = false;
            }, debounceDuration);
            return fn.lastReturnVal;
        };
    }
}
