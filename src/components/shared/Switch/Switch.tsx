import styles from "./Switch.module.css";

type SwitchProps = {
    isOn: boolean,
    handleToggle: () => void
}

const Switch = ({ isOn, handleToggle }: SwitchProps) => {
  return (
    <>
      <input
        id="react-switch"
        checked={isOn}
        onChange={handleToggle}
        className={styles.react_switch_checkbox}
        type="checkbox"
      />
      <label
        className={styles.react_switch_label}
        htmlFor="react-switch"
      >
        <span className={styles.react_switch_button} />
      </label>
    </>
  );
};

export default Switch;
