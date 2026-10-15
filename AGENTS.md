<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the industrial company website in a reusable, prop-driven component with business content supplied separately; this permits reuse without editing presentation code.
- Keep the inquiry drawer in the host page and invoke it through onOpenInquiry(product); this lets integrations choose their own RFQ workflow.
- Demo contacts and credentials are illustrative only; inquiries hand off to email or WhatsApp rather than pretending to save or send requests.
