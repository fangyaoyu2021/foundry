(function() {
    var type_impls = Object.fromEntries([["forge",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-Clone-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","forge::revm::db::EmptyDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Database-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-Database-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a> for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = E</h4></section></summary><div class='docblock'>The database error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.basic\" class=\"method trait-impl\"><a href=\"#method.basic\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.basic\" class=\"fn\">basic</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.AccountInfo.html\" title=\"struct forge::revm::interpreter::primitives::AccountInfo\">AccountInfo</a>&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get basic account information.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.code_by_hash\" class=\"method trait-impl\"><a href=\"#method.code_by_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.code_by_hash\" class=\"fn\">code_by_hash</a>(\n    &amp;mut self,\n    code_hash: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.Bytecode.html\" title=\"enum forge::revm::interpreter::primitives::Bytecode\">Bytecode</a>, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get account code by its hash.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.storage\" class=\"method trait-impl\"><a href=\"#method.storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.storage\" class=\"fn\">storage</a>(\n    &amp;mut self,\n    address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n    index: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get storage value of address at index.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.block_hash\" class=\"method trait-impl\"><a href=\"#method.block_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.Database.html#tymethod.block_hash\" class=\"fn\">block_hash</a>(\n    &amp;mut self,\n    number: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html\" title=\"trait forge::revm::interpreter::primitives::db::Database\">Database</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.Database.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::Database::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get block hash by block number.</div></details></div></details>","Database","forge::revm::db::EmptyDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DatabaseRef-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-DatabaseRef-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a> for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = E</h4></section></summary><div class='docblock'>The database error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.basic_ref\" class=\"method trait-impl\"><a href=\"#method.basic_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#tymethod.basic_ref\" class=\"fn\">basic_ref</a>(\n    &amp;self,\n    _address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.AccountInfo.html\" title=\"struct forge::revm::interpreter::primitives::AccountInfo\">AccountInfo</a>&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get basic account information.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.code_by_hash_ref\" class=\"method trait-impl\"><a href=\"#method.code_by_hash_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#tymethod.code_by_hash_ref\" class=\"fn\">code_by_hash_ref</a>(\n    &amp;self,\n    _code_hash: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"forge/revm/interpreter/primitives/enum.Bytecode.html\" title=\"enum forge::revm::interpreter::primitives::Bytecode\">Bytecode</a>, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get account code by its hash.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.storage_ref\" class=\"method trait-impl\"><a href=\"#method.storage_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#tymethod.storage_ref\" class=\"fn\">storage_ref</a>(\n    &amp;self,\n    _address: <a class=\"struct\" href=\"forge/revm/precompile/struct.Address.html\" title=\"struct forge::revm::precompile::Address\">Address</a>,\n    _index: <a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/alloy_primitives/struct.Uint.html\" title=\"struct forge::revm::interpreter::primitives::alloy_primitives::Uint\">Uint</a>&lt;256, 4&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get storage value of address at index.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.block_hash_ref\" class=\"method trait-impl\"><a href=\"#method.block_hash_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#tymethod.block_hash_ref\" class=\"fn\">block_hash_ref</a>(\n    &amp;self,\n    number: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/interpreter/primitives/struct.FixedBytes.html\" title=\"struct forge::revm::interpreter::primitives::FixedBytes\">FixedBytes</a>&lt;32&gt;, &lt;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt; as <a class=\"trait\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html\" title=\"trait forge::revm::interpreter::primitives::db::DatabaseRef\">DatabaseRef</a>&gt;::<a class=\"associatedtype\" href=\"forge/revm/interpreter/primitives/db/trait.DatabaseRef.html#associatedtype.Error\" title=\"type forge::revm::interpreter::primitives::db::DatabaseRef::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Get block hash by block number.</div></details></div></details>","DatabaseRef","forge::revm::db::EmptyDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-Debug-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","forge::revm::db::EmptyDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-Default-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","forge::revm::db::EmptyDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, E&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","forge::revm::db::EmptyDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"forge/revm/db/struct.EmptyDBTyped.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h4></section></div></details>",0,"forge::revm::db::EmptyDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, _: &amp;<a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","forge::revm::db::EmptyDB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","forge::revm::db::EmptyDB"],["<section id=\"impl-Copy-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-Copy-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section>","Copy","forge::revm::db::EmptyDB"],["<section id=\"impl-Eq-for-EmptyDBTyped%3CE%3E\" class=\"impl\"><a href=\"#impl-Eq-for-EmptyDBTyped%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"forge/revm/db/struct.EmptyDBTyped.html\" title=\"struct forge::revm::db::EmptyDBTyped\">EmptyDBTyped</a>&lt;E&gt;</h3></section>","Eq","forge::revm::db::EmptyDB"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[27866]}