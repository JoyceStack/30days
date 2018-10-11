export default {
    namespaced: true,
    state: {
        isMobile: false,
        theme: 'dark',
        layout: 'side',
        systemName: 'Vue Antd Admin',
        copyright: '2018 by guodp',
        footerLinks: [
            { link: 'https://baochen.name/', name: 'Blog' }
        ],
        multipage: true
    },
    mutations: {
        setDevice(state, isMobile) {
            state.isMobile = isMobile
        },
        setTheme(state, theme) {
            state.theme = theme
        },
        setLayout(state, layout) {
            state.layout = layout
        },
        setMultipage(state, multipage) {
            state.multipage = multipage
        }
    }
}