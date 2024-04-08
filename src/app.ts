showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

interface IMultimediaPlayer {
    play(file: string): void;
    stop(file: string): void;
}

interface IMultimediaController {
    playMedia(file: string): void;
    stopMedia(file: string): void;
}


class AudioPlayer implements IMultimediaController {
    playMedia(file: string): void {
        console.log(`Playing audio file: ${file}`);
    };
    stopMedia(file: string): void {
        console.log(`Stopping audio file: ${file}`);
    }
}

class VideoPlayer implements IMultimediaController {
    playMedia(file: string): void {
        console.log(`Playing video file: ${file}`);
    };
    stopMedia(file: string): void {
        console.log(`Stopping video file: ${file}`);
    }
}

class MultimediaPlayerFacade implements IMultimediaPlayer {
    private readonly audioPlayer: AudioPlayer;
    private readonly videoPlayer: VideoPlayer;

    constructor(audioPlayer?: AudioPlayer, videoPlayer?: VideoPlayer ) {
        this.audioPlayer = audioPlayer || new AudioPlayer();
        this.videoPlayer = videoPlayer || new VideoPlayer();
    }

    play(file: string): void {
        this.audioPlayer ? this.audioPlayer.playMedia(file) : this.videoPlayer.playMedia(file);
    }

    stop(file: string): void {
        this.audioPlayer ? this.audioPlayer.stopMedia(file) : this.videoPlayer.stopMedia(file);
    }
}

const videoPlayer = new VideoPlayer();
const audioPlayer = new AudioPlayer();
const multimediaVideoPlayer: IMultimediaPlayer = new MultimediaPlayerFacade(videoPlayer);
const multimediaAudioPlayer: IMultimediaPlayer = new MultimediaPlayerFacade(audioPlayer);
multimediaAudioPlayer.play('song.mp3');
multimediaVideoPlayer.play('movie.mp4');


