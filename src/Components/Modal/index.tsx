import React, { ReactNode } from "react";
import styles from "./Modal.module.scss";
import {AiFillCloseSquare} from "react-icons/ai";

interface IModalProps {
    titulo: string,
    children: ReactNode,
    aberto: boolean
	closeModal: () => void
}
function Modal({closeModal, titulo, children, aberto }: IModalProps) {
	return (
		<section key={titulo} className={`${styles.modalOverlay} ${aberto ? styles.modalAberto : styles.modalFechado}`}>
			<section className={styles.modalOverlay__modal}>
				<header>
					<AiFillCloseSquare className={styles.modalOverlay__modal__botaoFechar} onClick={closeModal} />
				</header>
				<h2>{titulo}</h2>
				<div className={styles.modalOverlay__modal__body}>{children}</div>
			</section>
		</section>
	);
}

export default Modal;