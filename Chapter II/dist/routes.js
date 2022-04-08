"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseServer_1 = __importDefault(require("./CreateCourseServer"));
function createCourse(request, response) {
    CreateCourseServer_1.default.execute({
        name: 'NodeJS',
        educator: 'Caio',
        duration: 12
    });
    CreateCourseServer_1.default.execute({
        name: 'React',
        educator: 'Diego',
    });
    return response.send();
}
exports.createCourse = createCourse;
