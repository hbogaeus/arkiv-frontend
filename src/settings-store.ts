import {writable} from "svelte/store";

export interface Settings {
  secret: string;
}

let initialValue: Settings = JSON.parse(localStorage.getItem("settings")) || {secret: ''};

export const settings = writable<Settings>(initialValue);

settings.subscribe((value => {
  console.log(value);
  localStorage.setItem("settings", JSON.stringify(value));
}));
