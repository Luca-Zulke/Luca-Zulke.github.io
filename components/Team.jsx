import Image from 'next/image';
import React from 'react';
import styles from '../styles/Team.module.css';
import * as basicLightbox from 'basiclightbox';
import { DisableScroll, EnableScroll } from './ScrollHelper';

const Team = () => {
  const images = {
    person1: {
      url: '/img/Mike_Oxlong.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati sunt aliquam fugiat eum molestiae.',
    },
    person2: {
      url: '/img/Harry_Azcrac.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati sunt aliquam fugiat eum molestiae.',
    },
    person3: {
      url: '/img/Ben_Dover.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati sunt aliquam fugiat eum molestiae.',
    } /*,
    person4: {
      url: "../img/Mike_Oxlong.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati sunt aliquam fugiat eum molestiae."
    },
    person5: {
      url: "../img/Mike_Oxlong.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati sunt aliquam fugiat eum molestiae."
    },
    person6: {
      url: "../img/Mike_Oxlong.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati sunt aliquam fugiat eum molestiae."
    }*/,
  };

  return (
    <div id="team" data-target="team" className={styles.team}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <div>MEET OUR TEAM</div>
            <hr />
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt inventore eius?</div>
          </div>
          <div className={styles.teamContainer}>
            {Object.entries(images).map((key, i) => (
              <div key={i} className={styles.teamMember}>
                <div
                  className={styles.member}
                  onClick={() => {
                    const instance = basicLightbox.create(
                      `<img style="max-width: 100vw; max-height: 80vh;" src="${key[1].url}"/>
                        <div style="color: #fff; font-weight: 400; font-size: 20px; margin-top: 15px; text-align: center;">
                          ${key[1].url
                            .substring(key[1].url.lastIndexOf('/') + 1, key[1].url.lastIndexOf('.'))
                            .split('_')
                            .join(' ')}
                        </div>
                      `,
                      {
                        onShow: (instance) => {
                          DisableScroll();
                          instance.element().querySelector('div').onclick = instance.close;
                        },
                        onClose: () => EnableScroll(),
                      }
                    );
                    instance.show();
                  }}
                >
                  <div className={styles.image}>
                    <Image src={key[1].url} layout="fill" alt="" objectFit="cover" />
                  </div>
                </div>
                <div className={styles.caption}>
                  <div>
                    {key[1].url
                      .substring(key[1].url.lastIndexOf('/') + 1, key[1].url.lastIndexOf('.'))
                      .split('_')
                      .join(' ')}
                  </div>
                  <div>{key[1].description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
