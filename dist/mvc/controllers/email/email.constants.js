"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMTP_PROVIDER = "ssl0.ovh.net";
exports.REPLY_TO = "kevin.riedl@wavect.io";
exports.FROM = "noreply@wavect.io";
exports.FROM_PWD = "1etZ4bqH4ngik0gW43Qn";
exports.SUBJECT = "A user solved your challenge";
exports.HTML = function (props) {
    return "<h1>Challenge solved</h1>\n    <p>First of all, thank you for using our service! Secondly, we have great news for you! \n    Your last published challenge has been solved by one of our users.</p>\n    <p>As you sponsored our current challenge, you may want to get in touch with following user: <strong>" + props.userEmail + "</strong></p>\n    <p>Thus, please contact the user above and arrange all details necessary to settle your obligation. E.g. if you sponsored our challenge\n    with a rebate, then firmly submit the associated rebate-code. In case you offered a give-away you may want to raffle the announced products\n    amongst all challenge-solvers.</p>\n    <p>Please note that you are <strong>not</strong> allowed to use the submitted e-mail address for other purposes than mentioned above. Otherwise\n    you may face a GDPR violation.</p>\n    <p>We take feedback seriously. Please let us know, what should be improved: <a href=\"mailto:" + exports.REPLY_TO + "\">" + exports.REPLY_TO + "</a></p>\n    <p>Yours sincerely</p>\n    <p>Your Wavect-Team</p>\n";
};
//# sourceMappingURL=email.constants.js.map