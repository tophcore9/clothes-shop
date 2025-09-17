import { defineStore } from "pinia";

export interface IAlert {
    message: string,
    type: string,
    visible: boolean,
    time: number,
}

export interface IModal {
    title: string,
    content: string,
    confirmText: string,
    visible: boolean,
    confirmFunction: Function,
}

interface IDebug {
    alert: IAlert;
    modal: IModal;
}

export const useDebugStore = defineStore("debug", {
    state: () => {
        return <IDebug> {
            alert: {
                message: '',
                type: '',
                visible: false,
                time: 1500,
            },
            modal: {
                title: '',
                content: '',
                confirmText: '',
                visible: false,
            },
        }
    },
    actions: {
        showAlert(alert: IAlert) {
            this.alert.message = alert.message;
            this.alert.type = alert.type;
            this.alert.time = alert.time;
            this.alert.visible = true;
        },
        showModal(modal: IModal) {
            this.modal.title = modal.title;
            this.modal.content = modal.content;
            this.modal.confirmText = modal.confirmText;
            this.modal.confirmFunction = modal.confirmFunction;
            this.modal.visible = true;
        },
    }
})
