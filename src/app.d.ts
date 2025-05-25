type MessageType = 'info' | 'success' | 'warning' | 'error';

declare global {
	namespace App {
		namespace Superforms {
			interface Message {
				type: MessageType;
				text: string;
			}
		}
	}

	namespace globalThis {
		interface Window {
			onRecaptchaSuccess: (token: string) => void;
			onRecaptchaLoad: () => void;
			onRecaptchaExpired: () => void;
			onRecaptchaError: () => void;
		}
	}
}

export {};
