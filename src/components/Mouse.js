import React from "react";
import styles from "./Mouse.module.css";

export default class Mouse extends React.Component {
    render() {
        return <div className={styles.root}>
            <div className={styles.cursor}>Cursor</div>
        </div>
    }
}