import express from "express";
import { publishers, saveData } from "../server.js";


const domainsRouter = express.Router();

domainsRouter.get("/:publisherName", (req, res) => {
    const publisherName = req.params.publisherName;
    const publisher = publishers.find(
        pub => pub.publisher.toLowerCase() === publisherName.toLowerCase()
    );

    if (!publisher) {
        return res.status(404).json({ errorMessage: "Publisher not found" });
    }

    res.status(200).json(publisher.domains);
});


domainsRouter.delete("/:publisherName/:url", (req, res) => {
    const { publisherName, url } = req.params;
    const publisher = publishers.find(
        pub => pub.publisher.toLowerCase() === publisherName.toLowerCase()
    );

    if (!publisher) {
        return res.status(404).json({ errorMessage: "Publisher not found" });
    }

    const domainIndex = publisher.domains.findIndex(
        domain => domain.url.toLowerCase() === url.toLowerCase()
    );

    if (domainIndex === -1) {
        return res.status(404).json({ errorMessage: "Domain not found" });
    }

    const [deletedDomain] = publisher.domains.splice(domainIndex, 1);
    saveData();
    res.status(200).json(deletedDomain);
});


domainsRouter.put("/:publisherName/:url", (req, res) => {
    const { publisherName, url } = req.params;
    const { desktopAds, mobileAds } = req.body;

    const publisher = publishers.find(
        pub => pub.publisher.toLowerCase() === publisherName.toLowerCase()
    );

    if (!publisher) {
        return res.status(404).json({ errorMessage: "Publisher not found" });
    }

    const domain = publisher.domains.find(
        domain => domain.url.toLowerCase() === url.toLowerCase()
    );

    if (!domain) {
        return res.status(404).json({ errorMessage: "Domain not found" });
    }

    if (desktopAds !== undefined) domain.desktopAds = desktopAds;
    if (mobileAds !== undefined) domain.mobileAds = mobileAds;

    saveData();
    res.status(200).json(domain);
});



export default domainsRouter;
