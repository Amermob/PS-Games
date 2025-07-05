import { NewestPs4 } from "./NewestPs4";
import { NewestPs5 } from "./NewestPs5";
import Landing from "./Landing";
import { Popular } from "./Popular";

export default function GamesStatics() {
    return (
        <>
            <Landing />
            <NewestPs5 />
            <NewestPs4 />
            <Popular />
        </>
    )
}