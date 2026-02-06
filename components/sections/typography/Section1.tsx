import Link from "next/link";

interface TypographySection1Props {
  title?: string;
  className?: string;
  showSocialSticky?: boolean;
}

export default function Section1({
  title = "Typography",
  className = "",
  showSocialSticky = true
}: TypographySection1Props) {
  return (
    <>
      <div className={`entry-header text-center entry-header-style-1 mb-30 mt-50 ${className}`}>
        <h1 className="entry-title mb-30 font-weight-500">{title}</h1>
      </div>
      {/*figure*/}
      <article className="entry-wraper mb-50">
        {showSocialSticky && (
          <div className="entry-left-col">
            <div className="social-sticky">
              <a href="#">
                <i className="ti-facebook" />
              </a>
              <a href="#">
                <i className="ti-twitter" />
              </a>
              <a href="#">
                <i className="ti-heart" />
              </a>
              <a href="#">
                <i className="ti-email" />
              </a>
            </div>
          </div>
        )}
        <div className="excerpt mb-30">
          <h3 className="mb-20">Excerpt</h3>
          <p>The excerpt is basically a summary of a longer article, often used as a replacement on the blog index and archives pages to avoid needing to display the full content of each post.</p>
          <hr className="wp-block-separator is-style-dots" />
        </div>
        <div className="entry-main-content dropcap ">
          <div className="dropcap">
            <p>A drop cap is the where the first character of the first paragraph is made larger, taking up several lines of text or the first few sentences. Drop caps are used in various media, including books, newspaper articles, documents, and webpages. Drop caps are used to add style or grab a reader's attention.</p>
          </div>
          <hr className="wp-block-separator is-style-dots" />
          <h2>Headings</h2>
          <h1>Header one</h1>
          <h2>Header two</h2>
          <h3>Header three</h3>
          <h4>Header four</h4>
          <h5>Header five</h5>
          <h6>Header six</h6>
          <hr className="wp-block-separator" />
          <h2>Links</h2>
          <p>
            If you paste in a URL, like <a href="https://alithemes.com">https://alithemes.com</a> - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here's a link to <a href="https://alithemes.com">the AliThemes website.</a>
          </p>
          <hr className="wp-block-separator" />
          <h2>Blockquotes</h2>
          <p>Single line blockquote:</p>
          <blockquote>
            <p>Stay hungry. Stay foolish.</p>
          </blockquote>
          <p>Multi line blockquote with a cite reference:</p>
          <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
            <p>
              The
              <strong>
                HTML <code>&lt;blockquote&gt;</code> Element
              </strong>
              (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/blockquote#Notes">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" title="The HTML Citation Element <cite> represents a reference to a creative work. It must include the title of a work or a URL reference, which may be in an abbreviated form according to the conventions used for the addition of citation metadata.">
                <code>&lt;cite&gt;</code>
              </a>
              element.
            </p>
          </blockquote>
          <p>
            <cite>multiple contributors</cite> – MDN HTML element reference – blockquote
          </p>
          <hr className="wp-block-separator" />
          <h2>Tables</h2>
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Salary</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <a href="http://example.org/">John Doe</a>
                </th>
                <td>$1</td>
                <td>Because that's all Steve Jobs needed for a salary.</td>
              </tr>
              <tr>
                <th>
                  <a href="http://example.org/">Jane Doe</a>
                </th>
                <td>$100K</td>
                <td>For all the blogging she does.</td>
              </tr>
              <tr>
                <th>
                  <a href="http://example.org/">Fred Bloggs</a>
                </th>
                <td>$100M</td>
                <td>Pictures are worth a thousand words, right? So Jane x 1,000.</td>
              </tr>
              <tr>
                <th>
                  <a href="http://example.org/">Jane Bloggs</a>
                </th>
                <td>$100B</td>
                <td>With hair like that?! Enough said…</td>
              </tr>
            </tbody>
          </table>
          <hr className="wp-block-separator" />
          <h2>Definition Lists</h2>
          <dl>
            <dt>Definition List Title</dt>
            <dd>Definition list division.</dd>
            <dt>Startup</dt>
            <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>
            <dt>#dowork</dt>
            <dd>Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.</dd>
            <dt>Do It Live</dt>
            <dd>
              I'll let Bill O'Reilly will
              <a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c">
                explain
              </a>
              this one.
            </dd>
          </dl>
          <hr className="wp-block-separator" />
          <h2>Unordered Lists (Nested)</h2>
          <ul>
            <li>
              List item one
              <ul>
                <li>
                  List item one
                  <ul>
                    <li>List item one</li>
                    <li>List item two</li>
                    <li>List item three</li>
                    <li>List item four</li>
                  </ul>
                </li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ul>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ul>
          <hr className="wp-block-separator" />
          <h2>Ordered List (Nested)</h2>
          <ol start={8}>
            <li>
              List item one -start at 8
              <ol>
                <li>
                  List item one
                  <ol reversed>
                    <li>List item one -reversed attribute</li>
                    <li>List item two</li>
                    <li>List item three</li>
                    <li>List item four</li>
                  </ol>
                </li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ol>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ol>
          <hr className="wp-block-separator" />
          <h2>HTML Tags</h2>
          <p>
            These supported tags come from the WordPress.com code
            <a title="Code" href="https://en.support.wordpress.com/code/">
              FAQ
            </a>
            .
          </p>
          <p>
            <strong>Address Tag</strong>
          </p>
          <address>
            1 Infinite Loop
            <br />
            Cupertino, CA 95014
            <br />
            United States
          </address>
          <p>
            <strong>Anchor Tag (aka. Link)</strong>
          </p>
          <p>This is an example of a <a title="Google" href="http://www.google.com">link</a>.</p>
          <p>
            <strong>Abbreviation Tag</strong>
          </p>
          <p>The abbreviation <abbr title="'Cascading Style Sheets'">CSS</abbr> stands for "Cascading Style Sheets".</p>
          <p>
            <strong>Acronym Tag</strong>
          </p>
          <p>The acronym <abbr title="'Red, Green, Blue'">RGB</abbr> stands for "Red, Green, Blue".</p>
          <p>
            <strong>Big Tag</strong>
          </p>
          <p>These tests are a <big>big deal</big>, but this tag is no longer valid in HTML5.</p>
          <p>
            <strong>Cite Tag</strong>
          </p>
          <p>"Code is poetry." —<cite>Automattic</cite></p>
          <p>
            <strong>Code Tag</strong>
          </p>
          <p>You will learn later on in these tests that <code>word-wrap: break-word;</code> will be your best friend.</p>
          <p>
            <strong>Delete Tag</strong>
          </p>
          <p>This tag will let you <del>strikeout text</del>, but this tag is no longer supported in HTML5 (use the <code>&lt;strike&gt;</code> tag instead).</p>
          <p>
            <strong>Emphasize Tag</strong>
          </p>
          <p>The emphasize tag should <em>italicize</em> text.</p>
          <p>
            <strong>Insert Tag</strong>
          </p>
          <p>This tag should denote <ins>inserted</ins> text.</p>
          <p>
            <strong>Keyboard Tag</strong>
          </p>
          <p>This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>
          <p>
            <strong>Preformatted Tag</strong>
          </p>
          <p>This tag styles large blocks of code.</p>
          <pre>{`.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really long, text, just to see how the PRE tag handles it and to find out how it overflows;
}`}</pre>
          <p>
            <strong>Quote Tag</strong>
          </p>
          <p><q>Developers, developers, developers…</q> –Steve Ballmer</p>
          <p>
            <strong>Strike Tag</strong>
          </p>
          <p>This tag shows <s>strike-through text</s>.</p>
          <p>
            <strong>Strong Tag</strong>
          </p>
          <p>This tag shows <strong>bold<strong> text.</strong></strong></p>
          <p>
            <strong>Subscript Tag</strong>
          </p>
          <p>Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.</p>
          <p>
            <strong>Superscript Tag</strong>
          </p>
          <p>Still sticking with science and Isaac Newton, we have E = MC<sup>2</sup>, which should lift the 2.</p>
          <p>
            <strong>Teletype Tag</strong>
          </p>
          <p>This rarely used tag emulates <code>teletype text</code>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>
          <p>
            <strong>Variable Tag</strong>
          </p>
          <p>This allows you to denote <var>variables</var>.</p>
        </div>
      </article>
    </>
  );
}
