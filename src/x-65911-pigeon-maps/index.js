import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import { Map, Marker } from "pigeon-maps";

const view = (state, {updateState}) => {
	return (
		<div>
			<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
				<Marker width={50} anchor={[50.879, 4.6997]} />
			</Map>
		</div>
	);
};

createCustomElement('x-65911-pigeon-maps', {
	renderer: {type: snabbdom},
	view,
	styles
});
