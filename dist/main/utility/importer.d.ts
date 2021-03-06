/// <reference types="node" />
export import _ = require("lodash");
export import bluebird = require("bluebird");
export import path = require("path");
export import child = require("child_process");
export import Ajv = require("ajv");
export import Collections = require("typescript-collections");
export import colors = require("colors");
export import cryptoJS = require("crypto-js");
export import express = require("express");
export import moment = require("moment");
export import request = require("request");
export import S = require("string");
export import util = require("util");
export import uuid = require("node-uuid");
export import validator = require("validator");
export import winston = require("winston");
export import yargs = require("yargs");
export import i18n = require("i18n");
export import SocketIO = require("socket.io");
export import nodemailer = require("nodemailer");
export declare const ibantools: any;
export declare const ms: any;
export declare const PrettyError: any;
export declare const smsAPI: any;
export declare const ValidatorPolish: any;
export declare const packagejson: any;
export import jsonwebtokenL = require("jsonwebtoken");
export declare const jsonwebtokenLib: typeof jsonwebtokenL;
export declare const jsonwebtoken: any;
import * as fsL from "fs";
export declare const fsLib: typeof fsL;
export declare const fs: any;
import * as soapL from "soap";
export declare const soapLib: typeof soapL;
export declare const soap: any;
export * from "../services/logger.class";
export * from "./commander";
export * from "../services/launch.service";
export * from "../interfaces/sails";
export * from "../interfaces/waterline";
