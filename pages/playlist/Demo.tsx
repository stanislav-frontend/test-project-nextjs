import { usePlaylistCollection } from "@lib/hooks/usePlaylistCollection";
import { useStore } from "@lib/providers/GlobalStoreProvider";
import Playlist from "@modules/Playlist";
import Container from "@ui/Container";
import EmptyScreen from "@ui/EmptyScreen";
import SignInButton from "@ui/SignInButton";
import { observer } from "mobx-react-lite";
import Head from "next/head";

export default observer(function DemoPlaylistPage() {
  const { authStore, playlistStore } = useStore();
  const collection = usePlaylistCollection();

  if (!authStore.user) return (
    <Container>
      <Head>
        <title>Playlist - YouTube Clone</title>
      </Head>
      <EmptyScreen
        emojiCode="270C"
        title="Watch What You Want"
        text="Sign in to create your own playlists"
      >
        <SignInButton fontSize={16} />
      </EmptyScreen>
    </Container>
  )

  if (collection.length === 0) return (
    <Container>
      <Head>
        <title>Playlist - YouTube Clone</title>
      </Head>
      <EmptyScreen
        emojiCode="270C"
        title="Watch What You Want"
        text="There no videos in your playlist"
      />
    </Container>
  )

  return (
    <>
      <Head>
        <title>Playlist - YouTube Clone</title>
      </Head>
      <Playlist
        collection={collection}
        name={playlistStore.name}
        lastUpdate={playlistStore.lastUpdate}
      />
    </>
  )
})
