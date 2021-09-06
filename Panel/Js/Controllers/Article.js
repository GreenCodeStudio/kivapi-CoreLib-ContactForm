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
            name: t('Fields.id'),
            content: row => row.id,
            sortName: 'id',
            width: 180,
            widthGrow: 0
        });
        objectsList.columns.push({
            name: t('Fields.title'),
            content: row => row.title,
            sortName: 'title',
            width: 180,
            widthGrow: 1
        });


        //objectsList.sort = {"col": "stamp", "desc": true};
        objectsList.generateActions = (rows, mode) => {
            let ret = [];
            // if (rows.length == 1) {
            //     ret.push({
            //         name: TCommonBase("details"),
            //         icon: 'icon-show',
            //         href: "/Balance/show/" + rows[0].id,
            //         main: true
            //     });
            //if (Permissions.can('Balance', 'edit')) {
            ret.push({
                name: TCommon("Edit"),
                icon: 'icon-edit',
                href: "/panel/Article/edit/" + rows[0].id,
            });
            //}
            // }
            // if (mode != 'row' && Permissions.can('Balance', 'edit')) {
            //     ret.push({
            //         name: TCommonBase("openInNewTab"), icon: 'icon-show', showInTable: false, command() {
            //             rows.forEach(x => window.open("/Balance/show/" + x.id))
            //         }
            //     });
            // }
            return ret;
        }
        container.append(objectsList);
        objectsList.refresh();
    }
}