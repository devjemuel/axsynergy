webpackJsonp([0],{CXKa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("0xDb"),a=n("Xxa5"),r=n.n(a),i=n("exGp"),o=n.n(i),l={data:function(){return{errors:{}}},methods:{submit:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.errors={},t.$parent.$data.rounds=[],t.$parent.initialize(),s.e.success({message:"🤟 Game has been reset."}),t.closeModal();case 5:case"end":return e.stop()}},e,t)}))()},hasError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.b.hasError(this.errors,t)},closeModal:function(){this.$parent.toggleModal("reset",!1)}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vh-modal",{attrs:{isOpen:t.$parent.$data.resetModal,isCenter:!0},on:{"update:isOpen":function(e){return t.$set(t.$parent.$data,"resetModal",e)},"update:is-open":function(e){return t.$set(t.$parent.$data,"resetModal",e)}}},[n("vh-modal-body",[n("div",{staticClass:"vh-margin-top vh-text-center"},[n("h1",{staticClass:"vh-text-title"},[t._v("\n                👾\n            ")]),t._v(" "),n("h2",{staticClass:"vh-modal-title"},[t._v("\n                Are you sure you want to reset the game?\n            ")]),t._v(" "),n("div",{staticClass:"vh-margin-top vh-visible@m"},[n("vh-button",{staticClass:"vh-margin-small-right vh-margin-xsmall-top",attrs:{type:"button",size:"large"},on:{click:function(e){return t.closeModal()}}},[t._v("\n                    Cancel\n                ")]),t._v(" "),n("vh-button",{staticClass:"vh-margin-xsmall-top",attrs:{type:"button",size:"large",color:"primary"},on:{click:function(e){return t.submit()}}},[t._v("\n                    Yes\n                ")])],1),t._v(" "),n("div",{staticClass:"vh-margin-top vh-hidden@m"},[n("vh-button",{staticClass:"vh-margin-xsmall-top",attrs:{type:"button",size:"large",color:"primary"},on:{click:function(e){return t.submit()}}},[t._v("\n                    Yes\n                ")]),t._v(" "),n("vh-button",{staticClass:"vh-margin-small-right vh-margin-xsmall-top",attrs:{type:"button",size:"large"},on:{click:function(e){return t.closeModal()}}},[t._v("\n                    Cancel\n                ")])],1)])])],1)},staticRenderFns:[]},v=n("VU/8")(l,u,!1,null,null,null).exports,d=n("Dd8w"),c=n.n(d),h=n("NYxO"),m={data:function(){return{errors:{},form:{name:"AAP ENEMY",result:"WIN",created:"",rounds:[]}}},computed:c()({},Object(h.c)({games:"auth/games"})),methods:c()({},Object(h.b)({save:"auth/saveGame"}),{submit:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.errors={},t.form.name||(t.form.name="Game "+(t.games.length+1)),t.form.created=s.a.rawToday()+" "+s.a.rawTime(),t.form.rounds=t.$parent.$data.rounds,t.save(t.form),s.e.success({message:"🤟 Game has been saved."}),t.closeModal(),t.$router.push("/dashboard");case 8:case"end":return e.stop()}},e,t)}))()},hasError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.b.hasError(this.errors,t)},closeModal:function(){this.$parent.toggleModal("save",!1)}})},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vh-modal",{attrs:{isOpen:t.$parent.$data.saveModal,isCenter:!0},on:{"update:isOpen":function(e){return t.$set(t.$parent.$data,"saveModal",e)},"update:is-open":function(e){return t.$set(t.$parent.$data,"saveModal",e)}}},[n("vh-modal-body",[n("div",{staticClass:"vh-margin-top vh-text-center"},[n("h1",{staticClass:"vh-text-title"},[t._v("\n                💾\n            ")]),t._v(" "),n("h2",{staticClass:"vh-modal-title"},[t._v("\n                Do you want to save the game?\n            ")]),t._v(" "),n("form",{staticClass:"vh-form-stacked vh-margin-top",on:{submit:function(e){return e.preventDefault(),t.submit()}}},[n("fieldset",{staticClass:"vh-fieldset"},[n("div",{staticClass:"vh-margin"},[n("label",{staticClass:"vh-form-label vh-text-bold"},[t._v("\n                            Name of the game\n                        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"axs-input",attrs:{type:"text",required:"true",autofocus:"true",placeholder:"ex. AAP ENEMY"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.hasError("name")?n("small",{staticClass:"vh-text-danger vh-text-bold"},[t._v("\n                            👎🏻 Please fill up this required field.\n                        ")]):t._e()]),t._v(" "),n("div",{staticClass:"vh-margin-medium-top"},[n("label",{staticClass:"vh-form-label vh-text-bold"},[t._v("\n                            Do you win or not?\n                        ")]),t._v(" "),n("label",{staticClass:"vh-margin-right",staticStyle:{"font-size":"24px"},attrs:{for:"result-win"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.result,expression:"form.result"}],staticClass:"vh-checkbox",attrs:{id:"result-win",type:"radio"},domProps:{value:"WIN",checked:t._q(t.form.result,"WIN")},on:{change:function(e){return t.$set(t.form,"result","WIN")}}}),t._v(" "),n("span",{staticClass:"vh-margin-small-left"},[t._v("\n                                WIN\n                            ")])]),t._v(" "),n("label",{staticStyle:{"font-size":"24px"},attrs:{for:"result-lose"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.result,expression:"form.result"}],staticClass:"vh-checkbox",attrs:{id:"result-lose",type:"radio"},domProps:{value:"LOSE",checked:t._q(t.form.result,"LOSE")},on:{change:function(e){return t.$set(t.form,"result","LOSE")}}}),t._v(" "),n("span",{staticClass:"vh-margin-small-left"},[t._v("\n                                LOSE\n                            ")])])])])]),t._v(" "),n("div",{staticClass:"vh-margin-medium-top vh-visible@m"},[n("vh-button",{staticClass:"vh-margin-small-right vh-margin-xsmall-top",attrs:{type:"button",size:"large"},on:{click:function(e){return t.closeModal()}}},[t._v("\n                    Cancel\n                ")]),t._v(" "),n("vh-button",{staticClass:"vh-margin-xsmall-top",attrs:{type:"button",size:"large",color:"primary"},on:{click:function(e){return t.submit()}}},[t._v("\n                    Save\n                ")])],1),t._v(" "),n("div",{staticClass:"vh-margin-medium-top vh-hidden@m"},[n("vh-button",{staticClass:"vh-margin-xsmall-top",attrs:{type:"button",size:"large",color:"primary"},on:{click:function(e){return t.submit()}}},[t._v("\n                    Save\n                ")]),t._v(" "),n("vh-button",{staticClass:"vh-margin-small-right vh-margin-xsmall-top",attrs:{type:"button",size:"large"},on:{click:function(e){return t.closeModal()}}},[t._v("\n                    Cancel\n                ")])],1)])])],1)},staticRenderFns:[]},p={name:"InGame",components:{ResetModal:v,SaveModal:n("VU/8")(m,g,!1,null,null,null).exports},data:function(){return{resetModal:!1,saveModal:!1,rounds:[]}},mounted:function(){this.initialize()},computed:{currentEnergy:function(){var t=0;return this.rounds.forEach(function(e,n){var s=n?2:3,a=parseInt(e.usedEnergy)+parseInt(e.stolenEnergy),r=parseInt(s)+parseInt(e.gainedEnergy);(t=t-a+r)>10&&(t=10)}),t},currentRound:function(){return this.rounds.length?this.rounds[this.rounds.length-1]:{roundNumber:1}}},methods:{initialize:function(){this.rounds.push({roundNumber:1,roundEnergy:3,usedEnergy:0,gainedEnergy:0,stolenEnergy:0})},nextRound:function(){this.currentEnergy>=0?this.rounds.push({roundNumber:this.rounds[this.rounds.length-1].roundNumber+1,roundEnergy:2,usedEnergy:0,gainedEnergy:0,stolenEnergy:0}):s.e.error({message:"😡 Over energy computation. Please double check."})},cancelRound:function(){1!=this.rounds.length&&this.rounds.splice(this.rounds.length-1,1)},toggleModal:function(t,e){this[t+"Modal"]=e}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vh-animate vh-animate-fade-in"},[n("h1",{staticClass:"axs-title vh-text-center vh-margin-remove"},[t._v("\n        ENEMY'S GAME\n    ")]),t._v(" "),n("form",{staticClass:"vh-form-stacked",on:{submit:function(e){return e.preventDefault(),t.nextRound()}}},[n("div",{staticClass:"vh-margin-top vh-text-center"},[t.currentEnergy?n("h1",{staticClass:"vh-text-title vh-margin-remove",attrs:{"data-tooltip":"Enemy's Energy"}},t._l(t.currentEnergy,function(e){return n("span",{key:e},[t._v("\n                    ⚡️\n                ")])}),0):n("h1",{staticClass:"vh-text-title vh-margin-remove",attrs:{"data-tooltip":"No Energy"}},[t._v("\n                🌪\n            ")]),t._v(" "),n("h4",{staticClass:"vh-text-bold vh-margin-remove"},[t._v("\n                ROUND "+t._s(t.currentRound.roundNumber)+"\n            ")]),t._v(" "),n("div",{staticClass:"vh-margin-top"},[n("vh-grid",{attrs:{gutter:"small"}},[n("div",{staticClass:"vh-width-1-1@s vh-width-1-5@m vh-width-1-5@l"}),t._v(" "),n("div",{staticClass:"vh-width-1-1@s vh-width-3-5@m vh-width-3-5@l"},[n("vh-grid",{staticClass:"vh-flex-middle",attrs:{gutter:"small"}},[n("div",{staticClass:"vh-width-expand"},[n("label",{staticClass:"vh-form-label vh-text-bold"},[t._v("\n                                    USED ENERGY\n                                ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentRound.usedEnergy,expression:"currentRound.usedEnergy"}],staticClass:"axs-input",attrs:{type:"number",placeholder:"ex. 2"},domProps:{value:t.currentRound.usedEnergy},on:{input:function(e){e.target.composing||t.$set(t.currentRound,"usedEnergy",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"vh-text-right vh-margin-small-top"},[n("vh-button",{attrs:{type:"button",size:"medium",color:"default",outline:!0,disabled:!t.currentRound.usedEnergy},on:{click:function(e){t.currentRound.usedEnergy--}}},[t._v("\n                                    ➖ \n                                ")]),t._v(" "),n("vh-button",{attrs:{type:"button",size:"medium",color:"primary",outline:!0},on:{click:function(e){t.currentRound.usedEnergy++}}},[t._v("\n                                    ➕\n                                ")])],1)])],1),t._v(" "),n("div",{staticClass:"vh-width-1-1@s vh-width-1-5@m vh-width-1-5@l"})]),t._v(" "),n("vh-grid",[n("div",{staticClass:"vh-width-1-1@s vh-width-1-5@m vh-width-1-5@l"}),t._v(" "),n("div",{staticClass:"vh-width-1-1@s vh-width-3-5@m vh-width-3-5@l"},[n("vh-grid",{staticClass:"vh-flex-middle",attrs:{gutter:"small"}},[n("div",{staticClass:"vh-width-expand"},[n("label",{staticClass:"vh-form-label vh-text-bold"},[t._v("\n                                    GAINED ENERGY\n                                ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentRound.gainedEnergy,expression:"currentRound.gainedEnergy"}],staticClass:"axs-input",attrs:{type:"number",placeholder:"ex. 2"},domProps:{value:t.currentRound.gainedEnergy},on:{input:function(e){e.target.composing||t.$set(t.currentRound,"gainedEnergy",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"vh-text-right vh-margin-small-top"},[n("vh-button",{attrs:{type:"button",size:"medium",color:"default",outline:!0,disabled:!t.currentRound.gainedEnergy},on:{click:function(e){t.currentRound.gainedEnergy--}}},[t._v("\n                                    ➖ \n                                ")]),t._v(" "),n("vh-button",{attrs:{type:"button",size:"medium",color:"primary",outline:!0},on:{click:function(e){t.currentRound.gainedEnergy++}}},[t._v("\n                                    ➕\n                                ")])],1)])],1),t._v(" "),n("div",{staticClass:"vh-width-1-1@s vh-width-1-5@m vh-width-1-5@l"})]),t._v(" "),n("vh-grid",[n("div",{staticClass:"vh-width-1-1@s vh-width-1-5@m vh-width-1-5@l"}),t._v(" "),n("div",{staticClass:"vh-width-1-1@s vh-width-3-5@m vh-width-3-5@l"},[n("vh-grid",{staticClass:"vh-flex-middle",attrs:{gutter:"small"}},[n("div",{staticClass:"vh-width-expand"},[n("label",{staticClass:"vh-form-label vh-text-bold"},[t._v("\n                                    STOLEN ENERGY\n                                ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentRound.stolenEnergy,expression:"currentRound.stolenEnergy"}],staticClass:"axs-input",attrs:{type:"number",placeholder:"ex. 2"},domProps:{value:t.currentRound.stolenEnergy},on:{input:function(e){e.target.composing||t.$set(t.currentRound,"stolenEnergy",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"vh-text-right vh-margin-small-top"},[n("vh-button",{attrs:{type:"button",size:"medium",color:"default",outline:!0,disabled:!t.currentRound.stolenEnergy},on:{click:function(e){t.currentRound.stolenEnergy--}}},[t._v("\n                                    ➖ \n                                ")]),t._v(" "),n("vh-button",{attrs:{type:"button",size:"medium",color:"primary",outline:!0},on:{click:function(e){t.currentRound.stolenEnergy++}}},[t._v("\n                                    ➕\n                                ")])],1)])],1),t._v(" "),n("div",{staticClass:"vh-width-1-1@s vh-width-1-5@m vh-width-1-5@l"})]),t._v(" "),n("div",{staticClass:"vh-margin-medium-top"},[n("div",{staticClass:"vh-visible@m"},[n("vh-button",{directives:[{name:"show",rawName:"v-show",value:1!=t.currentRound.round,expression:"currentRound.round!=1"}],staticClass:"vh-margin-xsmall-top",attrs:{type:"button",size:"large",color:"default"},on:{click:function(e){return t.cancelRound()}}},[t._v("\n                            👈 CANCEL ROUND\n                        ")]),t._v(" "),n("vh-button",{staticClass:"vh-margin-xsmall-top",attrs:{type:"submit",size:"large",color:"default"}},[t._v("\n                            💪 NEXT ROUND\n                        ")])],1),t._v(" "),n("div",{staticClass:"vh-hidden@m"},[n("vh-button",{staticClass:"vh-margin-xsmall-top",attrs:{type:"submit",size:"large",color:"default"}},[t._v("\n                            💪 NEXT ROUND\n                        ")]),t._v(" "),n("vh-button",{directives:[{name:"show",rawName:"v-show",value:1!=t.currentRound.round,expression:"currentRound.round!=1"}],staticClass:"vh-margin-xsmall-top",attrs:{type:"button",size:"large",color:"default"},on:{click:function(e){return t.cancelRound()}}},[t._v("\n                            👈 CANCEL ROUND\n                        ")])],1),t._v(" "),n("hr",{staticClass:"vh-margin-top"}),t._v(" "),n("div",{staticClass:"vh-margin-top"},[n("vh-button",{staticClass:"vh-margin-xsmall-top",attrs:{type:"button",size:"medium",color:"default"},on:{click:function(e){return t.toggleModal("save",!0)}}},[t._v("\n                            💾 SAVE GAME\n                        ")]),t._v(" "),n("vh-button",{staticClass:"vh-margin-xsmall-top",attrs:{type:"button",size:"medium",color:"default"},on:{click:function(e){return t.toggleModal("reset",!0)}}},[t._v("\n                            👾 RESET GAME\n                        ")]),t._v(" "),n("div",{staticClass:"vh-margin-medium-top"},[n("router-link",{staticClass:"vh-link-reset vh-text-primary",attrs:{to:"/dashboard"}},[t._v("\n                                BACK TO DASHBOARD\n                            ")])],1)],1)])],1)])]),t._v(" "),n("reset-modal"),t._v(" "),n("save-modal")],1)},staticRenderFns:[]},b=n("VU/8")(p,f,!1,null,null,null);e.default=b.exports}});
//# sourceMappingURL=0.2b845e2763c0ef9aeb12.js.map