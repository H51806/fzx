/*
Navicat MySQL Data Transfer

Source Server         : echongcheng
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : echongc

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-15 20:54:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for delit
-- ----------------------------
DROP TABLE IF EXISTS `delit`;
CREATE TABLE `delit` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imgsrc` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `jieshao` varchar(255) NOT NULL,
  `curprice` varchar(255) NOT NULL,
  `oldprice` varchar(255) NOT NULL,
  `xiaoji` varchar(255) NOT NULL,
  `qty` int(255) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of delit
-- ----------------------------
INSERT INTO `delit` VALUES ('1', '11', '../images/b119afe839b879f4e57ab7e0e1876917.jpg@!water', '博宇 MS系列鱼缸MS-320白', '博宇 MS系列鱼缸MS-320白', '￥148.0', '¥106.80', '￥148.0', '2');
INSERT INTO `delit` VALUES ('3', '1111', '../images/b119afe839b879f4e57ab7e0e1876917.jpg@!water', '博宇 MS系列鱼缸MS-320白', '博宇 MS系列鱼缸MS-320白', '￥148.0', '', '￥148.0', '5');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `newprice` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼3开柜门  白色 STR-1200P  白色', '￥91.20', '￥6.00');
INSERT INTO `list` VALUES ('2', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼3开柜门  白色 STR-1200P  白色', '￥901.20', '￥576.00');
INSERT INTO `list` VALUES ('3', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼3开柜门  白色 STR-1200P  白色', '￥91.20', '￥76.00');
INSERT INTO `list` VALUES ('14', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼�?1�? 3开柜门  红色 STR-1200P', '￥921.20', '￥576.00');
INSERT INTO `list` VALUES ('15', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('16', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('17', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥5706.00');
INSERT INTO `list` VALUES ('18', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('9', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥56.00');
INSERT INTO `list` VALUES ('10', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼3开柜门  白色 STR-1200P  白色', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('11', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼�? 1�? 3开柜门  白色 STR-1200P  白色', '￥991.20', '￥576.00');
INSERT INTO `list` VALUES ('21', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼�? 1�? 3开柜门  白色 STR-1200P  白色', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('13', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼�? 1�? 3开柜门  白色 STR-1200P  白色', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('4', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('5', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('6', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('7', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('8', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('19', '../images/7cebe37a5c848fe461f7494489ba3211.jpg@!200w-c', '奇溢自然 智能屏风生态鱼 3开柜门  红色 STR-1200P', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('20', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼�? 1�? 3开柜门  白色 STR-1200P  白色', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('12', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼�? 1�? 3开柜门  白色 STR-1200P  白色', '￥91.20', '￥576.00');
INSERT INTO `list` VALUES ('22', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼3开柜门  白色 STR-1200P  白色', '￥91.20', '￥57600.00');
INSERT INTO `list` VALUES ('23', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼�? 1�? 3开柜门  白色 STR-1200P  白色', '￥120.20', '￥576.00');
INSERT INTO `list` VALUES ('24', '../images/fdf276acdcd102cfb2bd2c996ab27efa.jpg@!200w-c', '缸体1226*420*925  柜体1226*42 奇溢自然 智能屏风生态鱼�? 1�? 3开柜门  白色 STR-1200P  白色', '￥1.20', '￥576.00');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1234', '111');
INSERT INTO `login` VALUES ('12345', '222');
INSERT INTO `login` VALUES ('111', '1');
INSERT INTO `login` VALUES ('1111', '123');
INSERT INTO `login` VALUES ('1111', '1');
INSERT INTO `login` VALUES ('1111', '1');
INSERT INTO `login` VALUES ('1111', '111');
INSERT INTO `login` VALUES ('1111', '1111');
INSERT INTO `login` VALUES ('1111', '1111');

-- ----------------------------
-- Table structure for shouye
-- ----------------------------
DROP TABLE IF EXISTS `shouye`;
CREATE TABLE `shouye` (
  `id` int(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shouye
-- ----------------------------
INSERT INTO `shouye` VALUES ('3', 'images/b119afe839b879f4e57ab7e0e1876917.jpg@!water', '博宇 MS系列鱼缸MS-320白', '￥148.00');
INSERT INTO `shouye` VALUES ('4', 'images/39ec2361966087372fa96cb0dc951a43.jpg@!water', '西龙 桌面缸 33*23*33.5cm 白色', '￥119.00');
INSERT INTO `shouye` VALUES ('5', 'images/e3f0317d61075118b63a38dbe78d43e4.jpg@!water', '奇溢自然 超白缸 50*26*30 厚5MM', '￥179.00');
INSERT INTO `shouye` VALUES ('6', 'images/e659529abef4363f50810bd8b5efcd51.jpg@!water', '奇溢自然 孵鱼槽 长20.5cm*宽9cm*高13.5cm G-208', '￥20.00');
INSERT INTO `shouye` VALUES ('1', 'images/1ea7b4d66ff92e471c672332b84e8aab.jpg@!water', '烟火FireAQUA超白缸 450*260*300', '￥358.00');
INSERT INTO `shouye` VALUES ('2', 'images/e7e2e31a2d5d298a4b7dddd3b0bf2238.jpg@!water', '松宝 桌面缸 190*140*190mm', '￥89.00');
SET FOREIGN_KEY_CHECKS=1;
