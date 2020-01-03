import container from "@app/inversify.config.ts";
import TestGlobal from "@tests/global";

declare const global:TestGlobal;

global.container = container;
