export default {
    mounted() {

        if (this.$route && this.$route.query) {
            console.log('mixin.mounted:', this.$route);
        } else {
            console.log('mixin.mounted:');
        }
        if (this.$route && this.$route.query && this.$route.query.embedId) {
            // 去掉滚动条
            const appEl = document.getElementById("app");
            appEl.style.height = 0;
            appEl.style.overflow = "hidden";
            // 将元素放大到全屏
            const el = document.getElementById(this.$route.query.embedId);
            el.style.left = 0;
            el.style.top = 0;
            el.style.width = "100vw";
            el.style.height = "100vh";
            el.style.margin = 0;
            el.style.boxSizing = 'border-box';
            el.style.position = "fixed";
            el.style.background = "white";
            el.style.zIndex = 9999;
        }
    },
    methods: {
        generateIframe(embedId) {
            const newRoute = this.$router.resolve({
                path: this.$route.path,
                query: {
                    ...this.$route.query,
                    embedId: embedId
                },
            });
            const iframeUrl = `<iframe src="${location.origin}/${newRoute.href}" width="600" height="400" frameborder="0" allowtransparency="true"></iframe>`;
            console.log("iframeUrl:", iframeUrl);
        }
    },
}