import axios, { CancelToken } from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import images from '../assets/imageLoader';
import affixRotation from '../assets/affixRotation';

function Affixes() {

    const [week, setWeek] = useState();
    const [affixes, setAffixes] = useState([]);
    const componentIsMounted = useRef(true);

    const baseUrl = 'https://raider.io/api/v1';
    const region = 'us';

    const arrayEquals = (a, b) => {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, i) => val === b[i])
    }

    useEffect(() => {
        return () => {
            componentIsMounted.current = false;
        };
    }, []);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
        async function fetchAffixes() {
            try {
                const asyncResponse = await axios(
                    `${baseUrl}/mythic-plus/affixes?region=${region}&locale=en`,
                    {
                        cancelToken: cancelTokenSource.token,
                    }
                );

                const value = asyncResponse.data;
                const currentAffixID = value.affix_details.map(affix => affix.id);

                // for (let i = 0; i < 12; i++) {
                //     if (arrayEquals(affixRotation[i], currentAffixID)) {
                //         setWeek(i);
                //         return;
                //     }
                // }

                if (componentIsMounted.current) {
                    setAffixes(value.affix_details);

                }

            } catch (err) {
                if (axios.isCancel(err)) {
                    return console.info(err);
                }

                console.error(err);
            }

        }

        fetchAffixes();

        return () => {
            // here we cancel previous http request that did not complete yet
            cancelTokenSource.cancel(
                "Cancelling previous http call because a new one was made"
            );
        };
    }, []);

    const getImageUrl = (affixName) => {
        const imgUrl = images.filter((img) => img.title === affixName);
        return imgUrl[0].src;
    }

    const displayAffixes = affixes.map((affix) =>
        <li key={affix.id} className="affix-card">
            <a href={affix.wowhead_url} className="affix-link">
                <h2 className="affix-title"> {affix.name} </h2>
            </a>
            <div className='affix-container'>
                <img className='affix-img' src={getImageUrl(affix.name)} alt={affix.name} />
                <p className="affix-description">{affix.description}</p>
            </div>
        </li>
    )

    return (
        <div className="affix-display">
            <h1>This Week's Affixes</h1>
            { affixes.length > 0 ?
                <div id='affixes'>
                    <ul> {displayAffixes} </ul>
                </div> : "Loading..."
            }
        </div>

    )
}

export default Affixes;