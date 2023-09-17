import { FFmpeg } from '@ffmpeg/ffmpeg'


import coreURL from '../ffmpeg/ffmpeg-core.js?url' //serão carregados somente no momento necessário durante o uso da aplicação devido ao '?url'
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url'
import workerURL from '../ffmpeg/ffmpeg-worker.js?url'


let ffmpeg: FFmpeg | null  //so carrega se for utilizar ela, devido ao wasm ser muito pesado

export async function getFFmpeg(){
    if(ffmpeg){
        return ffmpeg
    }

    ffmpeg = new FFmpeg()

    if(!ffmpeg.loaded){
        await ffmpeg.load({
            coreURL, wasmURL, workerURL
        })
    }

    return ffmpeg
}