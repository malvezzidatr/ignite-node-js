import { Request, Response } from 'express';
import CreateCourseServer from './CreateCourseServer';

export function createCourse(request: Request, response: Response) {
    
    CreateCourseServer.execute({
        name: 'NodeJS',
        educator: 'Caio',
        duration: 12
    });

    CreateCourseServer.execute({
        name: 'React',
        educator: 'Diego',
    });

    return response.send();
}