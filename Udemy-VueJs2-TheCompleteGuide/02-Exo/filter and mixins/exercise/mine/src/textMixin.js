export const textMixin = {
    data() {
        return {
            mixinText: 'Some text',
        }
    },
    computed: {
        stringReverseMixin() {
            return this.mixinText.split("").reverse().join("").split(" ").reverse().join(" ");
        },
        stringLengthMixin() {
            return `${this.mixinText} (${this.mixinText.length})`;
        }
    }
}