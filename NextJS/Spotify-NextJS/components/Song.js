import {useRecoilState}from 'recoil'
import {currentTrackIdState,isPlayingState} from '../atoms/songAtom'
import useSpotify from '../hooks/useSpotify'
import {millisToMinAndSeconds} from '../lib/time'

function Song({ order , track }) {
    const spotifyApi = useSpotify()
    const [currentTrackId , setCurrentTrackId ] = useRecoilState(currentTrackIdState)
    const [isPlaying , setIsPlaying] = useRecoilState(isPlayingState)

    const playSong = () =>{
        setCurrentTrackId(track.track.id)
        setIsPlaying(true)
        spotifyApi.play({
            uris: [track.track.uri]
        });
    }

    return (
        <div className='grid grid-cols-2 test-gray-500 py-4 px-5
        hover:bg-gray-800 rounded-lg cursor-pointer'
        onClick={playSong}>

            {/* Image */}
            <div className='flex items-center space-x-4'>
                <p>{order+1}</p>
                <img
                className='h-10 w-10'
                src={track.track.album.images[0].url}
                alt=''
            />
            {/* Song and artist name */}
            <div>
                <p className='w-36 lg:w-64 text-white truncate'>{track.track.name}</p>
                <p className='w-40'>{track.track.artists[0].name}</p>
            </div>
    
            </div>
            {/* Album and duration */}
            <div className='flex items-center justify-between ml-auto md:ml-0'>
                <p className='w-40 hidden md:inline'>{track.track.album.name}</p>
                <p>{millisToMinAndSeconds(track.track.duration_ms)}</p>
            </div>

        </div>
    )
}

export default Song
