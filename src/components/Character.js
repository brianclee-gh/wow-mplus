import axios, { CancelToken } from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';

function Character() {

    // Find character: region, name, server

    const [characterName, setCharacterName] = useState('')
    const [characterData, setCharacterData] = useState([]);
    const componentIsMounted = useRef(true);

    const baseUrl = 'https://raider.io/api/v1';
    const region = 'us';
    const realmName = 'stormscale';

    const showCharacter = () => {
        console.log(characterData)
    }

    useEffect(() => {
        return () => {
            componentIsMounted.current = false
        };
    }, []);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
        async function fetchCharacter() {
            try {
                const asyncResponse = await axios(
                    `${baseUrl}/characters/profile?region=${region}&realm=${realmName}&name=${characterName}&fields=gear%2Cguild%2Ccovenant%2Cmythic_plus_best_runs"`,
                    {
                        cancelToken: cancelTokenSource.token,
                    }
                );

                const value = asyncResponse.data;

                if (componentIsMounted.current) {
                    setCharacterData(value);
                }

            } catch (err) {
                if (axios.isCancel(err)) {
                    return console.info(err);
                }

                console.error(err);
            }
        }

        fetchCharacter();

        return () => {
            // here we cancel previous http request that did not complete yet
            cancelTokenSource.cancel(
                "Cancelling previous http call because a new one was made"
            );
        };
    }, [characterName]);



    return (
        <div id='character-display'>
            <SearchBar 
                keyword={characterName}
                setKeyword={setCharacterName}
                searchingFor={"Character Name"}
                />
            {/* <button onClick={showCharacter}>show Character</button> */}
            <div id='charInfo'></div>
        </div>

    )
}

export default Character;