showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

interface IMediaPlayer {
    play(file: string): void;
    stop(file: string): void;
}

class AudioPlayer implements IMediaPlayer {
    play(file: string): void {
        console.log(`Playing audio file: ${file}`);
    }

    stop(file: string): void {
        console.log(`Stopping audio file: ${file}`);
    }
}

class VideoPlayer implements IMediaPlayer {
    play(file: string): void {
        console.log(`Playing video file: ${file}`);
    }

    stop(file: string): void {
        console.log(`Stopping video file: ${file}`);
    }
}

class MultimediaPlayerFacade {
    private readonly audioPlayer: AudioPlayer;
    private readonly videoPlayer: VideoPlayer;

    constructor() {
        this.audioPlayer = new AudioPlayer();
        this.videoPlayer = new VideoPlayer();
    }

    play(file: string): void {
        if (this.isAudioFile(file)) {
            this.audioPlayer.play(file);
        } else if (this.isVideoFile(file)) {
            this.videoPlayer.play(file);
        } else {
            console.log(`Unsupported file format: ${file}`);
        }
    }

    stop(file: string): void {
        if (this.isAudioFile(file)) {
            this.audioPlayer.stop(file);
        } else if (this.isVideoFile(file)) {
            this.videoPlayer.stop(file);
        } else {
            console.log(`Unsupported file format: ${file}`);
        }
    }

    private isAudioFile(file: string): boolean {
        return file.endsWith('.mp3') || file.endsWith('.wav');
    }

    private isVideoFile(file: string): boolean {
        return file.endsWith('.mp4') || file.endsWith('.avi') || file.endsWith('.mov');
    }
}

// Використання фасаду для відтворення медіа
const player = new MultimediaPlayerFacade();
player.play('song.mp3');
player.play('movie.mp4');
player.play('image.jpg');



