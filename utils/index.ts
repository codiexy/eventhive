export function createPageUrl(pageName: string) {
    const lower = pageName.toLowerCase();
    if (lower === 'home' || lower === 'index') return '/';

    return '/' + pageName
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase/PascalCase to kebab-case
        .replace(/ /g, '-')
        .toLowerCase();
}