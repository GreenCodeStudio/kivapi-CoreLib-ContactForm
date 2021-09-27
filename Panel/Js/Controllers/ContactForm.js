// import {FormManager} from "../../../Core/js/form";
// import {AjaxTask} from "../../../Core/js/ajaxTask";
// import {pageManager} from "../../../Core/js/pageManager";

import {DatasourceAjax} from "../../../../../../Core/Panel/Js/datasourceAjax";
import {ObjectsList} from "../../../../../../Core/Panel/Js/ObjectsList/objectsList";
import {FormManager} from "../../../../../../Core/Panel/Js/form";
import {PanelPageManager} from "../../../../../../Core/Panel/Js/PanelPageManager";
import {AjaxPanel} from "../../../../../../Core/Panel/Js/ajaxPanel";
import {Document, ParseXmlString} from "pmeditor-core"
import {Editor} from "pmeditor-editor"
import {t} from "../../i18n.xml"
import {t as TCommon} from "../../../../../../Core/Panel/Common/i18n.xml"


export class index {
    constructor(page, data) {
        const container = page.querySelector('.list');
        let datasource = new DatasourceAjax('ContactForm', 'getTable');
        let objectsList = new ObjectsList(datasource);
        objectsList.columns = [];
        objectsList.columns.push({
            name: t('Fields.stamp'),
            content: row => row.stamp,
            sortName: 'stamp',
            width: 180,
            widthGrow: 0
        });
        objectsList.columns.push({
            name: t('Fields.name'),
            content: row => row.name,
            sortName: 'name',
            width: 180,
            widthGrow: 1
        });
        objectsList.columns.push({
            name: t('Fields.mail'),
            content: row => row.mail,
            sortName: 'mail',
            width: 180,
            widthGrow: 1
        });


        objectsList.generateActions = (rows, mode) => {
            let ret = [];

            ret.push({
                name: TCommon("Show"),
                icon: 'icon-show',
                href: "/panel/ContactForm/show/" + rows[0].id,
            });

            return ret;
        }
        container.append(objectsList);
        objectsList.refresh();
    }
}