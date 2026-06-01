export function Header() {
  return (
    <box width="100%" justifyContent="center" alignItems="center">
      <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center">
        <ascii-font font="tiny" text="Night" color="gray" />
        <ascii-font font="pallet" text="Code" />
      </box>
    </box>
  );
};