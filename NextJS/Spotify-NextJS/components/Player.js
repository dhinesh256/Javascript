import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import useSonginfo from "../hooks/useSonginfo"
import useSpotify from "../hooks/useSpotify"
import {currentTrackIdState,isPlayingState} from '../atoms/songAtom'

function Player() {
    const spotifyApi = useSpotify()
    const {data:session,status} = useSession()
    const [currentTrackId , setCurrentIdTrack ] = useRecoilState(currentTrackIdState)
    const [isPlaying , setIsPlaying] = useRecoilState(isPlayingState)

    const [volume,setvolume] = useState(50)

    const fetchCurrentSong = () => {
        if(!songInfo){
            spotifyApi.getMyCurrentPlayingTrack().then((data)=>{
                setCurrentIdTrack(data.body?.item?.id)
            
            spotifyApi.getMyCurrentPlaybackState().then((data)=>{
                setIsPlaying(data.body?.is_playing);
            });
            });
        }
    }
    const songInfo = useSonginfo()
    
        
    useEffect(()=>{
        if(spotifyApi.getAccessToken()){
            fetchCurrentSong();
            setvolume(50);
        }
    },[currentTrackIdState,spotifyApi,session])

    return (
        <div className="h-24 bg-gradient-to-b from-black to-gray-900
        text-white">
            {/* Left */}
            <div>
                <img 
                    className="hidden md:inline h-10 w-10"
                    src={songInfo?.album.images?.[0]?.url}
                    alt=""
                />
                <div>
                    <h3>{songInfo?.name}</h3>
                    <p>{songInfo?.artists?.[0]?.name}</p>
                </div>
            </div>


        </div>
    )
}

export default Player
