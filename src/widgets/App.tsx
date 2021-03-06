import esri = __esri;

import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";

import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Widget from "esri/widgets/Widget";

import AppViewModel, { AppParams } from "./App/AppViewModel";

interface AppViewParams extends AppParams, esri.WidgetProperties {}

const CSS = {
    base: "main",
    webmap: "webmap"
};

@subclass("app.widgets.webmapview")
export default class App extends declared(Widget) {

    @property()
    viewModel = new AppViewModel();

    @aliasOf("viewModel.appName")
    appName: string;

    @aliasOf("viewModel.map")
    map: EsriMap;

    @aliasOf("viewModel.view")
    view: __esri.MapView;

    constructor(params: Partial<AppViewParams>) {
        super(params);
    }

    render() {
        return (
            <div class={CSS.base}>
                <div class={CSS.webmap} bind={this} afterCreate={this.onAfterCreate}>
                </div>
            </div>
        );
    }

    private onAfterCreate(element: HTMLDivElement) {
        import("../data/app").then(({ map }) => {
            this.map = map;
            this.view = new MapView({
              map: this.map,
              container: element,
              center: [-104.24, 32.41],
              zoom: 9
            });
        });
    }
}