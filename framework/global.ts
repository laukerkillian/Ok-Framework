import { Ok } from './Ok';
let m_app: Ok;
export function setApp(app: Ok): void {
    m_app = app;
}
export function currApp(): Ok {
    return m_app;
}