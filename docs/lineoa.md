
LINE Official Account (LINE OA)
---
<!-- ---
# Setup Webhook

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes. -->


# คู่มือ LINE Official Account (LINE OA)

เอกสารนี้จะสอนคุณตั้งแต่เริ่มผูกบัญชี LINE OA บน LINE Developer Console จนถึงการดึง Channel Access Token เพื่อนำไปใช้งานกับ API ต่าง ๆ ของ LINE Messaging API

# สร้าง LINE Provider และ Messaging API Channel

1. ไปที่ [LINE Developers Console](https://developers.line.biz/)
2. ล็อกอินด้วยบัญชี LINE ที่มีสิทธิ์
3. กด **Create Provider**
4. ตั้งชื่อ Provider และกด Confirm
5. กด **Create a new Channel** → เลือก **Messaging API**
6. ใส่ข้อมูล เช่น ชื่อแอป, อีเมล, หมวดหมู่
7. กด Create → ได้ Channel แล้ว!

# ผูก Channel เข้ากับ LINE OA

1. ไปที่ [LINE Official Account Manager](https://manager.line.biz/)
2. เลือกบัญชี OA ที่คุณต้องการ
3. ไปที่เมนู **Settings > Messaging API**
4. กด **Connect this channel**
5. เลือก Channel ที่คุณสร้างไว้จากขั้นตอนก่อนหน้า

# ดึง Channel Access Token

1. ไปที่ [LINE Developers Console](https://developers.line.biz/)
2. เลือก Provider > Channel
3. ไปที่แท็บ **Messaging API**
4. ในส่วน **Channel Access Token**, กด **Issue** เพื่อสร้าง Token
5. คัดลอก Token ไปใช้กับ LINE API (อย่าแชร์ให้ใคร)

📌 ตัวอย่าง Token: yUokn...xxA== (ยาว ๆ)