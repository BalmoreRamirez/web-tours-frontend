export default function ({ route, store, redirect }) {
    if (!store.state.auth || store.state.agency) {
        return redirect(`/login?redirect=${route.fullPath}`)
    }
}
