<script>
	import { onMount } from 'svelte';

	/** @type {string}*/
	export let reponame;

	/** @type {string}*/
	export let issueTerm = 'pathname';

	/** @type {string}*/
	export let label = 'comments';

	/** @type {string}*/
	export let theme = 'github-light';

	/** @type {HTMLDivElement} */
	let divElm;

	/** @type {HTMLScriptElement} */
	let scriptElm;

	/** @type {boolean}*/
	let browser = false;

	$: {
		try {
			const iFrame = browser && divElm.getElementsByClassName('utterances-frame')[0];
			if (iFrame) {
				// @ts-ignore
				iFrame.contentWindow.postMessage({ type: 'set-theme', theme }, 'https://utteranc.es');
			}
		} catch (e) {
			// iFrame is not loaded yet!
		}
	}

	const sendPostMessage = () => {
		const iFrame = divElm.getElementsByClassName('utterances-frame')[0];
		if (!iFrame) {
			setTimeout(sendPostMessage, 100);
			return;
		}
		iFrame.addEventListener('load', () => {
			console.log('Posting message to utterances iFrame');
			// @ts-ignore
			iFrame.contentWindow.postMessage({ type: 'set-theme', theme }, 'https://utteranc.es');
		});
	};

	onMount(() => {
		scriptElm = document.createElement('script');

		scriptElm.setAttribute('repo', reponame);
		scriptElm.setAttribute('issue-term', issueTerm);
		scriptElm.setAttribute('label', label);
		scriptElm.setAttribute('crossorigin', 'anonymous');
		scriptElm.src = 'https://utteranc.es/client.js';

		divElm.appendChild(scriptElm);
		browser = true;
		sendPostMessage();
	});
</script>

<div bind:this={divElm} />
