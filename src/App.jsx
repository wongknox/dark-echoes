import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  function episodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>
          Episode&nbsp;{selectedEpisode.id}:&nbsp;
          {selectedEpisode.title}
        </h2>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  function episodeGuide() {
    return (
      <section className="episodeGuide">
        <h2>Episodes</h2>
        <ul className="episodeGuide">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main className="main-content">
        {episodeGuide()}
        {episodeDetails()}
      </main>
    </>
  );
}
