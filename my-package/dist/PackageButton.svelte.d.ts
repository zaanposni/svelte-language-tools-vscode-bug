import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        label: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PackageButtonProps = typeof __propDef.props;
export type PackageButtonEvents = typeof __propDef.events;
export type PackageButtonSlots = typeof __propDef.slots;
export default class PackageButton extends SvelteComponent<PackageButtonProps, PackageButtonEvents, PackageButtonSlots> {
}
export {};
