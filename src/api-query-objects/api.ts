import { ApiEndpoint } from "@caucolum/api-query-object";

const baseURL: string = 'https://dog.ceo/api';

export interface ImagesListDataProps {
    message: string[],
    status: string,
}

const api = {
    imagesList: {
        method: 'get',
        url: '/breed/hound/images',
        DATA_PROPS: {} as ImagesListDataProps,
        clientSideResources: {
           
        }
    }
} as const satisfies Record<string, ApiEndpoint>;

export default api;
export {
    baseURL
}
