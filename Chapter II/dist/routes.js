"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseServer_1 = __importDefault(require("./CreateCourseServer"));
function createCourse(request, response) {
    CreateCourseServer_1.default.execute("NodeJS", 10, "Caio");
    return response.send();
}
exports.createCourse = createCourse;
