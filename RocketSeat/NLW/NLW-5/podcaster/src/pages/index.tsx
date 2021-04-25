import { GetStaticProps } from 'next'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '../services/api'
import { convertDurationToTImeString } from '../utils/convertDurationToTimeString'

import styles from './home.module.scss'

type Episode = {
  id: string;
  title: string;
  thumbnail: string,
  description: string,
  members: string;
  duration: number,
  durationAsString: string,
  url: string,
  publishedAt: string
}

type HomeProps = {
  latestEpisodes: Episode[]
  allEpisodes: Episode[]
}

export default function Home({latestEpisodes,allEpisodes}: HomeProps) {
  return (
    <div className={styles.homepage}>
      <section className={styles.latestEpisodes}>
      <h2>Últimos lançamentos</h2>
        <ul>
          {latestEpisodes.map(episode => {
            return (
              <li key={episode.id}>
                <Image  className={styles.thumbImg}
                        width={192} 
                        height={192}
                        objectFit="cover" 
                        src={episode.thumbnail} 
                        alt={episode.title} 
                  />
                <div className={styles.episodeDetails}>
                  <a href={episode.title}>
                    <p>{episode.members}</p>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationAsString}</span>
                  </a>
                </div>
                <button type="button">
                <img src="/play-green.svg" alt="Tocar Episódio"/>
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map( episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTImeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    }
  })

  const latestEpisodes = episodes.slice(0,2)
  const allEpisodes = episodes.slice(2,episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 12,
  }

}