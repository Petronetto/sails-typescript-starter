// Basic
export import _ = require("lodash");
export import bluebird = require("bluebird");
export import path = require("path");
export import child = require("child_process");

// Helpers
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

// Definitions
export import i18n = require("i18n");
export import SocketIO = require("socket.io");

// Service libraries
export import nodemailer = require("nodemailer");

// No ts libraries
/* tslint:disable:no-var-requires */
export const ibantools = require("ibantools");
export const ms = require("milliseconds");
export const PrettyError = require("pretty-error");
export const smsAPI = require("smsapi");
export const ValidatorPolish = require("validator-polish");

// Json data
export const packagejson = require("../../package.json");
/* tslint:enable */

// Promisified libraries
export import jsonwebtokenL = require("jsonwebtoken");
export const jsonwebtokenLib = jsonwebtokenL;
export const jsonwebtoken = bluebird.promisifyAll(jsonwebtokenL);

import * as fsL from "fs";
export const fsLib = fsL;
export const fs = bluebird.promisifyAll(fsL);

import * as soapL from "soap";
export const soapLib = soapL;
export const soap = bluebird.promisifyAll(soapL);

// Utility
export * from "../services/logger.class";
export * from "./commander";

// Services - Singletons
export * from "../services/launch.service";

// Interfaces
export * from "../interfaces/sails";
export * from "../interfaces/waterline";
