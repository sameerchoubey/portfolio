export default {
    name: "blog-item",
    props: ["title", "description", "date", "slug"],
    data() {
        return {
            postTitle: this.title,
            postDescription: this.description,
            postSlug: this.slug,
            postDate: this.date,
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        },
    },
};