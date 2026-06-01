import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { StatusBar } from "./components/status-bar";
import { InputBar } from "./components/input-bar";

function App() {
  return (
    <box 
    flexGrow={1}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    backgroundColor="#0D0D12"
    padding={1}
    >
      <Header/>
      <box width="100%" maxWidth={120} paddingX={2}>
        <InputBar
        disabled={false}
        onSubmit={() => {}}
        />
      </box>
    </box>
  );
}

const renderer = await createCliRenderer({
  targetFps:60,
  exitOnCtrlC:false,
});
createRoot(renderer).render(<App />);
