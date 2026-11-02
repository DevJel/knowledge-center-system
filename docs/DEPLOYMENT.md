# Deployment and domain runbook

## Hosting

GitHub Pages serves the static repository using .github/workflows/static.yml. The workflow checks out main, configures Pages, uploads the repository and deploys it. No compilation or backend provisioning is required.

## Custom domain

1. Open repository Settings → Pages and confirm the publishing source is GitHub Actions.
2. Set Custom domain to app-bible.jelvan.pro and save.
3. In Cloudflare's jelvan.pro zone, retain exactly this web record:

| Type | Name | Target | Proxy | TTL |
| --- | --- | --- | --- | --- |
| CNAME | app-bible | devjel.github.io | DNS only | Auto |

4. Wait for GitHub's DNS check and HTTPS certificate provisioning.
5. Enable Enforce HTTPS when GitHub makes it available.

Do not put a repository path or https:// into the DNS target. Avoid conflicting A/AAAA/CNAME records at the same hostname. The repository CNAME file records the intended hostname; it does not set the domain when publishing through Actions.

## Verification

- Confirm the latest main workflow run succeeds.
- Open https://app-bible.jelvan.pro and verify the expected playbook, valid TLS, title and favicon.
- Open #phase2 directly, reload, and verify navigation reaches Architecture.
- Navigate between sections and check Back/Forward.
- Check dark/light mode, mobile menu, search and Copy.
- Open favicon.svg directly and confirm it matches the header mark.

At the time these docs were written, the DNS record was created and the CNAME file committed. GitHub's custom-domain setting and live HTTPS were not independently verified.

## Troubleshooting and rollback

A GitHub Pages 404 can indicate an unset custom domain, failed publication or wrong repository mapping. Pending TLS requires checking DNS, GitHub's domain status and any certificate-authority restrictions. Do not change unrelated DNS or disable security controls to mask a failure.

For a broken release, revert the offending commit and push main, then check the new workflow. For a domain rollback, restore the previous approved GitHub domain setting and DNS record together. Preserve a record of both values before changes.
