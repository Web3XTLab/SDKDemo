"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const web3app_1 = __importDefault(require("../../../src/utils/web3app"));
let initialized = false;
/**
 * @param appTokenId - The token id of the app
 * @returns Whether the verified consumer has bought the app
 */
async function isAuthenticated(appTokenId) {
    if (!initialized) {
        await web3app_1.default.init();
        initialized = true;
    }
    // TODO: remove after the underlying API is stable
    // @ts-ignore
    return web3app_1.default.verify(appTokenId);
}
exports.isAuthenticated = isAuthenticated;
