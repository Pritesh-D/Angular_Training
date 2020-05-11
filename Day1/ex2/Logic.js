"use strict";
exports.__esModule = true;
var Data_1 = require("./Data");
var Logic = /** @class */ (function () {
    function Logic() {
        this.stringData = new Data_1.Data("The amazon FSx for Lustre CSI driver has reached beta status and is now supported by amazon Elastic Kubernetes Service (EKS). The CSI driver makes it simple to configure and use FSx for Lustre high performance file systems with containers on EKS and self-managed Kubernetes clusters running on aWS. amazon FSx for Lustre is a fully-managed, high performance file system optimized for workloads such as machine learning, high performance computing, video processing, financial modeling, electronic design automation, and analytics. With FSx for Lustre, you can quickly and easily spin up a high-performance file system linked to your S3 data repository, and transparently access S3 objects as files. With the FSx for Lustre CSI driver, you can dynamically provision and mount an FSx for Lustre file system to containers, so that your containerized workloads can natively access and process data stored in the file system or S3 data repository. You can use the CSI driver to mount and share the FSx file system across multiple pods from different nodes.");
    }
    Logic.prototype.findOccuranceOf = function (c) {
        return this.stringData.getData().split(c).length - 1;
    };
    return Logic;
}());
var logic = new Logic();
logic.findOccuranceOf('a');
console.log();
console.log("Numebr of 'a' : " + logic.findOccuranceOf('a'));
console.log();
console.log("Number of Statements : " + (logic.findOccuranceOf('.') + 1));
