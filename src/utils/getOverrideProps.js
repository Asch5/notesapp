export function getOverrideProps(overrides, componentName) {
    if (!overrides || !overrides[componentName]) {
        return {};
    }
    return overrides[componentName];
}
